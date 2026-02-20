import { InternshipStatus } from "../../generated/index.js";
import prisma from "../configs/prisma.Dbconfig.js";
import { AppError } from "../utils/AppError.js";

interface DashboardStats {
  totalInternships: number;
  activeInternships: number;
  expiredInternships: number;
  totalApplications: number;
  pendingApplications: number;
  recentApplications: number;
}
interface MonthlyInternshipData {
  month: string;
  internships: number;
}


export class DashboardService {
  static async getDashboardStats(userId: string): Promise<DashboardStats> {
    try {
      const stats = await prisma.$transaction(async (tx) => {
        // Total internships posted by user
        const totalInternships = await tx.internship.count({
          where: {
            postedById: userId,
          },
        });

        // Active internships (open and not expired)
        const activeInternships = await tx.internship.count({
          where: {
            postedById: userId,
            status: InternshipStatus.OPEN,
            OR: [
              { applicationDeadline: null }, // No deadline
              { applicationDeadline: { gte: new Date() } }, // Not expired
            ],
          },
        });

        // Expired internships
        const expiredInternships = await tx.internship.count({
          where: {
            postedById: userId,
            applicationDeadline: { lt: new Date() },
          },
        });

        // Fixed: Get applications count properly
        const internshipsWithApplications = await tx.internship.findMany({
          where: {
            postedById: userId,
          },
          include: {
            _count: {
              select: {
                applicants: true, // Count of applications per internship
              },
            },
          },
        });

        // Calculate total applications
        const totalApplications = internshipsWithApplications.reduce(
          (sum, internship) => sum + internship._count.applicants,
          0,
        );

        // Get pending applications (assuming PENDING status exists)
        const pendingApplications = await tx.studentInternship.count({
          where: {
            internship: {
              postedById: userId,
            },
            status: "ONGOING", // Adjust status based on your enum
          },
        });

        // Recent applications (last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const recentApplications = await tx.studentInternship.count({
          where: {
            internship: {
              postedById: userId,
            },
            appliedAt: {
              gte: sevenDaysAgo,
            },
          },
        });

        return {
          totalInternships,
          activeInternships,
          expiredInternships,
          totalApplications,
          pendingApplications,
          recentApplications,
        };
      });

      return stats; // Fixed: Return the stats
    } catch (err) {
      console.error("Error fetching dashboard stats:", err);
      if (err instanceof AppError) {
        throw err;
      }
      throw new AppError("Failed to fetch dashboard stats", 500);
    }
  }

  static async getMonthlyInternshipsData(
    userId: string,
  ): Promise<MonthlyInternshipData[]> {
    try {
      // Calculate date 12 months ago
      const twelveMonthsAgo = new Date();
      twelveMonthsAgo.setFullYear(twelveMonthsAgo.getFullYear() - 1);

      // Get internships from last 12 months
      const internships = await prisma.internship.findMany({
        where: {
          postedById: userId,
          createdAt: {
            gte: twelveMonthsAgo,
          },
        },
        select: {
          createdAt: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      });

      // Create array of last 12 months
      const months: { month: string; fullDate: Date; internships: number }[] = [];
      const currentDate = new Date();

      for (let i = 11; i >= 0; i--) {
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - i,
          1,
        );
        months.push({
          month: date
            .toLocaleDateString("en-US", { month: "short" })
            .toLowerCase(),
          fullDate: date,
          internships: 0,
        });
      }

      // Count internships for each month
      internships.forEach((internship) => {
        const internshipDate = new Date(internship.createdAt);
        const monthKey = internshipDate
          .toLocaleDateString("en-US", { month: "short" })
          .toLowerCase();
        const year = internshipDate.getFullYear();
        const currentYear = new Date().getFullYear();

        // Find matching month in our array
        const monthData = months.find((m) => {
          const monthYear = m.fullDate.getFullYear();
          return m.month === monthKey && monthYear === year;
        });

        if (monthData) {
          monthData.internships++;
        }
      });

      // Return in the requested format
      return months.map(({ month, internships }) => ({
        month,
        internships,
      }));
    } catch (err) {
      console.error("Error fetching monthly internships data:", err);
      if (err instanceof AppError) {
        throw err;
      }
      throw new AppError("Failed to fetch monthly internships data", 500);
    }
  }
}
