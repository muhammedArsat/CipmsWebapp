/* Logo url
<"https://img.logo.dev/stripe.com?token=pk_R5aWp096SYKfSM8nQRo8xA" />
*/

import prisma from "../configs/prisma.Dbconfig.js";
import { AppError } from "../utils/AppError.js";
import { Mode, InternshipStatus } from "../../generated/index.js";
import { PlacementOfficerUtil } from "../utils/PlacementOfficer.utils.js";
import { AppResponse } from "../utils/AppResponse.js";
import { title } from "node:process";
interface CreateInternshipData {
  title: string;
  companyName: string;
  companyUrl?: string;
  description: string;
  mode: Mode;
  location: string;
  salaryPackage?: string;
  applicationDeadline?: string;
  requirements?: string;
  duration:string,
  skills: string[];
  postedById: string;
  minCgpa:number
}

interface UpdateInternshipData {
  title: string;
  companyName: string;
  companyUrl?: string;
  description: string;
  mode: Mode;
  location: string;
  salaryPackage?: string;
  applicationDeadline?: string;
  duration:string
  requirements?: string;
  skills: string[];
  minCgpa:number
}

export class placementOfficerService {
  static async createInternship(data: CreateInternshipData) {
    try {
      // Validate placement officer exists
      const placementOfficer = await prisma.user.findFirst({
        where: {
          id: data.postedById,
          role: "PLACEMENT_OFFICER",
        },
        include: {
          placementOfficer: true,
        },
      });

      if (!placementOfficer || !placementOfficer.placementOfficer) {
        throw new AppError("Placement Officer not found or invalid", 404);
      }

      const skillIds = await PlacementOfficerUtil.upsertSkill(data.skills);
      const companyLogo = await PlacementOfficerUtil.fetchCompanyLogo(
        data.companyName,
        data.companyUrl,
      );

      const internship = await prisma.internship.create({
        data: {
          title: data.title,
          companyName: data.companyName,
          companyUrl: data.companyUrl,
          companyLogo: companyLogo, // Skip company logo for now
          description: data.description,
          location: data.location,
          mode: data.mode,
          salaryPackage: data.salaryPackage,
          applicationDeadline: data.applicationDeadline
            ? new Date(data.applicationDeadline)
            : null,
          requirement: data.requirements ?? "",
          duration:data.duration,
          status: InternshipStatus.OPEN,
          postedById: data.postedById,
          minCgpa:data.minCgpa,
          skills: {
            create: skillIds.map((skillId) => ({
              skill: {
                connect: { id: (skillId) },
              },
            })),
          },
        },
        include: {
          postedBy: {
            select: {
              user: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                },
              },
            },
          },
          skills: {
            include: {
              skill: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
          _count: {
            select: {
              applicants: true,
            },
          },
        },
      });

      // Return formatted response
      return {
        id: internship.id,
        title: internship.title,
        companyName: internship.companyName,
        companyUrl: internship.companyUrl,
        companyLogo: internship.companyLogo,
        description: internship.description,
        location: internship.location,
        mode: internship.mode,
        salaryPackage: internship.salaryPackage,
        duration:internship.duration,
        status: internship.status,
        createdAt: internship.createdAt,
      };
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }

      throw new AppError("Failed to create internship", 500);
    }
  }

  static async getAllInternshipPosted(userId: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { placementOfficer: true },
      });

      if (!user) {
        throw new AppError("User is not found", 400);
      }

      const internships = await prisma.internship.findMany({
        where: {
          postedById: userId,
        },
        include: {
          skills: {
            include: {
              skill: {
                select: {
                  name: true,
                },
              },
            },
          },
          _count: {
            select: {
              applicants: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          department: user.department,
        },
        internships: internships.map((internship) => ({
          id: internship.id,
          title: internship.title,
          companyName: internship.companyName,
          companyLogo: internship.companyLogo,
          companyUrl: internship.companyUrl,
          location: internship.location,
          status: internship.status,
          deadline: internship.applicationDeadline,
          salaryPackage:internship.salaryPackage,
          duration: internship.duration,
          requirements: internship.requirement,
          description:internship.description,
          skills: internship.skills.map((skill) => skill.skill.name),
          applicationCount: internship._count,
        })),
      };
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      console.log("Error: ", err);
      throw new AppError("Server Error", 500);
    }
  }

  static async updateInternship(
    data: UpdateInternshipData,
    id: string,
    userId: string,
  ) {
    try {
      console.log("Updating internship:", { data, id, userId }); // Debug log

      const internship = await prisma.internship.findUnique({
        where: { id: id },
        include: {
          skills: {
            include: {
              skill: true,
            },
          },
        },
      });

      if (!internship) {
        throw new AppError("Internship not found", 404);
      }

      if (internship.postedById !== userId) {
        throw new AppError(
          "You are unauthorized to access this internship",
          403,
        );
      }

      // Handle skills update
      let skillIds: string[] = [];
      if (data.skills && data.skills.length > 0) {
        skillIds = await PlacementOfficerUtil.upsertSkill(data.skills);
      }

      // Handle company logo update
      let companyLogo = internship.companyLogo;
      if (data.companyName || data.companyUrl !== undefined) {
        const companyName = data.companyName || internship.companyName || "";
        const companyUrl =
          data.companyUrl !== undefined
            ? data.companyUrl
            : internship.companyUrl || undefined;

        companyLogo = await PlacementOfficerUtil.fetchCompanyLogo(
          companyName,
          companyUrl,
        );
      }

      // Update with transaction
      const updatedInternship = await prisma.$transaction(async (tx) => {
        // Delete existing skills if new skills provided
        if (data.skills && data.skills.length > 0) {
          await tx.internshipSkill.deleteMany({
            where: { internshipId: id },
          });
        }

        // Prepare update data - only include fields that are provided
        const updateData: any = {};

        if (data.title !== undefined) updateData.title = data.title;
        if (data.companyName !== undefined)
          updateData.companyName = data.companyName;
        if (data.companyUrl !== undefined)
          updateData.companyUrl = data.companyUrl;
        if (data.description !== undefined)
          updateData.description = data.description;
        if (data.location !== undefined) updateData.location = data.location;
        if (data.mode !== undefined) updateData.mode = data.mode;
        if (data.salaryPackage !== undefined)
          updateData.salaryPackage = data.salaryPackage;
        if (data.requirements !== undefined)
          updateData.requirement = data.requirements;
        if (data.duration !== undefined)
          updateData.duration = data.duration
        if (data.minCgpa !== undefined)
            updateData.minCgpa = data.minCgpa
        if (data.applicationDeadline !== undefined) {
          updateData.applicationDeadline = data.applicationDeadline
            ? new Date(data.applicationDeadline)
            : null;
        }

        // Update company logo if changed
        if (companyLogo !== internship.companyLogo) {
          updateData.companyLogo = companyLogo;
        }

        // Add new skills if provided
        if (data.skills && data.skills.length > 0) {
          updateData.skills = {
            create: skillIds.map((skillId) => ({
              skill: {
                connect: { id: skillId }, // Fixed: Remove Number() wrapper
              },
            })),
          };
        }

        console.log("Update data:", updateData); // Debug log

        return await tx.internship.update({
          where: { id: id },
          data: updateData,
          include: {
            // Fixed: Based on your schema - direct User relation
            postedBy: {
              select: {
                user: {
                  select: {
                    id: true,
                    name: true,
                    email: true,
                  },
                },
              },
            },
            skills: {
              include: {
                skill: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
            _count: {
              select: {
                applicants: true,
              },
            },
          },
        });
      });

      return {
        id: updatedInternship.id,
        title: updatedInternship.title,
        companyName: updatedInternship.companyName,
        companyUrl: updatedInternship.companyUrl,
        companyLogo: updatedInternship.companyLogo,
        description: updatedInternship.description,
        location: updatedInternship.location,
        mode: updatedInternship.mode,
        salaryPackage: updatedInternship.salaryPackage,
        applicationDeadline: updatedInternship.applicationDeadline,
        requirements: updatedInternship.requirement,
        duration:updatedInternship.duration,
        status: updatedInternship.status,
        createdAt: updatedInternship.createdAt,
        minCgpa : updatedInternship.minCgpa,
        postedBy: updatedInternship.postedBy, // Fixed: Return full postedBy object
        skills: updatedInternship.skills.map((s) => s.skill.name),
        applicantCount: updatedInternship._count.applicants,
      };
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      console.error("Error updating internship:", err);
      throw new AppError("Failed to update internship", 500);
    }
  }
  static async deleteInternship(id: string, userId: string) {
    try {
      const internship = await prisma.internship.findUnique({
        where: { id: id },
      });

      if (internship?.postedById !== userId) {
        throw new AppError(
          "You are not authorized to delete this internship",
          403,
        );
      }

      const result = await prisma.$transaction(async (tx) => {
        await tx.internshipSkill.deleteMany({
          where: { internshipId: id },
        });

        await tx.studentInternship.deleteMany({ where: { internshipId: id } });

        await tx.savedInternship.deleteMany({ where: { internshipId: id } });
      });

      const deletedInternship = await prisma.internship.delete({
        where: { id: id },
        select: {
          title: true,
          companyName: true,
        },
      });

      return {
        success: true,
        message: "The internship deleted successfully",
        data: deletedInternship,
      };
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      console.error("Error deleting internship", err);
      throw new AppError("Server Error", 500);
    }
  }

  static async getDetailsOfPostedInternship(id: string, userId: string) {
    try {
      const internship = await prisma.internship.findUnique({
        where: { id: id },

        include: {
          skills: {
            include: {
              skill: {
                select: {
                  name: true,
                },
              },
            },
          },
          postedBy: {
            select: {
              user: {
                select: {
                  name: true,
                  id: true,
                  email: true,
                  department: true,
                },
              },
            },
          },

          _count: {
            select: {
              applicants: true,
            },
          },
        },
      });

      if (!internship) {
        throw new AppError("Internship is not found", 404);
      }

      const user = await prisma.user.findUnique({ where: { id: userId } });

      if (!user) {
        throw new AppError("User is not found", 404);
      }

      const skillName = internship.skills.map((skill)=>skill.skill.name)

       const response = {
         id: internship.id,
         title: internship.title,
         companyName: internship.companyName,
         companyUrl: internship.companyUrl,
         companyLogo: internship.companyLogo,
         description: internship.description,
         location: internship.location,
         mode: internship.mode,
         duration:internship.duration,
         salaryPackage: internship.salaryPackage,
         applicationDeadline: internship.applicationDeadline,
         requirement: internship.requirement,
         status: internship.status,
         createdAt: internship.createdAt,
         postedBy: internship.postedBy,
         skills: skillName, 
         minCgpa:internship.minCgpa,
         applicantCount: internship._count.applicants,
       };
      return response;
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }

      console.error(err);
      throw new AppError("Server Error", 500);
    }
  }
}
