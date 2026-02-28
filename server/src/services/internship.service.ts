import prisma from "../configs/prisma.Dbconfig.js";
import { AppError } from "../utils/AppError.js";

export class InternshipService {
  static async fetchAllInternship() {
    try {
      const [internships, totalInternships] = await prisma.$transaction([
        prisma.internship.findMany({
          orderBy: {
            createdAt: "desc",
          },
        }),
        prisma.internship.count(),
      ]);

      return {
        internships,
        totalInternships,
      };
    } catch (err) {
      throw new AppError("Failed to fetch internship", 500);
    }
  }

  static async fetchParticularInternship(id: string) {
    try {
      const internship = await prisma.internship.findUnique({
        where: {
          id: id,
        },
        include: {
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

      return {
        internship,
        applicationCount: internship._count.applicants,
      };
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      throw new AppError(
        `Failed to fetch the particular internship with id : ${id}`,
        500,
      );
    }
  }
}
