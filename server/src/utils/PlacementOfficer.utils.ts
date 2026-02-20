import axios from "axios";
import { AppError } from "./AppError.js";
import prisma from "../configs/prisma.Dbconfig.js";

export class PlacementOfficerUtil {
  public static async fetchCompanyLogo(
    companyName: string,
    companyUrl?: string,
  ): Promise<string> {
    try {
      const cleanCompanyName = companyName
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9]/g, "");

      let domain = "";
      if (companyUrl) {
        try {
          const url = companyUrl.startsWith("http")
            ? companyUrl
            : `https://${companyUrl}`;
          domain = new URL(url).hostname.replace("www.", "");
        } catch {
          domain = companyUrl
            .replace(/^(https?:\/\/)?(www\.)?/, "")
            .split("/")[0];
        }
      }

      const logoTarget = domain || `${cleanCompanyName}.com`;
      const logoUrl = `https://img.logo.dev/${logoTarget}?token=pk_R5aWp096SYKfSM8nQRo8xA`;

      try {
        const response = await axios.head(logoUrl, {
          timeout: 5000,
          validateStatus: (status) => status === 200,
        });

        console.log("Logo response status:", response.status);
        if (response.status === 200) {
          return logoUrl;
        }
      } catch (logoError) {
        console.log(`Logo not found for ${logoTarget}, using fallback`);
      }

      const initials = companyName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("")
        .substring(0, 2);
      const fallbackLogo = `https://ui-avatars.com/api/?name=${initials}&background=6366f1&color=ffffff&size=128&format=png`;
      return fallbackLogo;
    } catch (err) {
      console.error("Error in fetchCompanyLogo:", err);
      const initials = companyName.substring(0, 2).toUpperCase();
      return `https://ui-avatars.com/api/?name=${initials}&background=6366f1&color=ffffff&size=128&format=png`;
    }
  }

  public static async upsertSkill(skills: string[]): Promise<string[]> {
    try {
      console.log("Processing skills:", skills); // Debug log

      const skillIds: string[] = [];

      for (const skillName of skills) {
        if (!skillName?.trim()) {
          console.log("Skipping empty skill:", skillName);
          continue;
        }

        const cleanSkillName = skillName.trim();
        console.log("Processing skill:", cleanSkillName); // Debug log

        let skill = await prisma.skill.findFirst({
          where: {
            name: {
              equals: cleanSkillName,
              mode: "insensitive",
            },
          },
        });

        if (!skill) {
          console.log("Creating new skill:", cleanSkillName); // Debug log
          skill = await prisma.skill.create({
            data: { name: cleanSkillName },
          });
        } else {
          console.log("Found existing skill:", skill); // Debug log
        }

        skillIds.push(skill.id); // ✅ skill.id is already UUID string
        console.log("Added skill ID:", skill.id); // Debug log
      }

      console.log("Final skillIds:", skillIds); // Debug log
      return skillIds;
    } catch (err) {
      console.error("Error in upsertSkill:", err);

      if (err instanceof Error) {
        console.error("Error details:", {
          name: err.name,
          message: err.message,
          stack: err.stack,
        });
      }

      throw new AppError("Failed to process skills", 500);
    }
  }
}
