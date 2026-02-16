
import axios from "axios";
import { AppError } from "./AppError.js";
import prisma from "../configs/prisma.Dbconfig.js";
 
export  class PlacementOfficerUtil {
  public static async fetchCompanyLogo(
    companyName: string,
    companyUrl?: string,
  ): Promise<string> {
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
    console.log("logo:", logoTarget);
    const logoUrl = `https://img.logo.dev/${logoTarget}?token=pk_R5aWp096SYKfSM8nQRo8xA`;
    console.log(logoUrl);
    try {
      const response = await axios.head(logoUrl, {
        timeout: 5000,
        validateStatus: (status) => status === 200,
      });

      console.log(response.status);
      if (response.status === 200) {
        return logoUrl;
      }

      const initials = companyName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase)
        .join("")
        .substring(0, 2);
      const fallbackLogo = `https://ui-avatars.com/api/?name=${initials}&background=6366f1&color=ffffff&size=128&format=png`;

      return fallbackLogo;
    } catch (err) {
      const initials = companyName.substring(0, 2).toUpperCase();
      return `https://ui-avatars.com/api/?name=${initials}&background=6366f1&color=ffffff&size=128&format=png`;
    }
  }

  public static async upsertSkill(skills: string[]): Promise<string[]> {
    try {
      const skillIds: string[] = [];

      for (const skillName of skills) {
        if (!skillName.trim()) continue;

        const cleanSkillName = skillName.trim();

        let skill = await prisma.skill.findFirst({
          where: {
            name: {
              equals: cleanSkillName,
              mode: "insensitive",
            },
          },
        });

        if (!skill) {
          skill = await prisma.skill.create({
            data: { name: cleanSkillName },
          });
        }
        skillIds.push(String(skill.id));
      }
      return skillIds;
    } catch (err) {
      throw new AppError("Failed to process skills", 500);
    }
  }
}