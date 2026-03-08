import prisma from "../configs/prisma.Dbconfig.js";
import { AppError } from "../utils/AppError.js";

export class MentorService {
  static async getAllAppliedApplications(id: string) {
    try {
      const applications = await prisma.studentInternship.findMany({
        where: {
          status: "APPLIED",
          student: {
            mentorId: id,
          },
        },
        include: {
          student: {
            select: {
              cgpa: true,
              resumeUrl: true,
              user: {
                select: {
                  profileUrl: true,
                  name: true,
                  department: true,
                      userId: true,
                  email:true
                },
              },
            },
          },
          internship: {
            select: {
              title: true,
              companyName: true,
              companyLogo: true,
              minCgpa: true,
            },
          },
        },
      });

      const data = applications.map((app) => ({
        id: app.id,
        studentId: app.studentId,
        internshipId: app.internshipId,
        status: app.status,
        appliedAt: app.appliedAt,
        certificateUrl: app.certificateUrl,
        title: app.internship.title,
        // Student fields
        studentName: app.student.user.name,
          studentDepartment: app.student.user.department,
        studentEmail:app.student.user.email,
        studentRollNo: app.student.user.userId,
        // studentProfileUrl: app.student.user.profileUrl,
        studentCgpa: app.student.cgpa,
        studentResumeUrl: app.student.resumeUrl,
        // Internship fields
        company: app.internship.companyName,
        companyLogo: app.internship.companyLogo,
        minCgpa: app.internship.minCgpa,
      }));

      return {
        data,
      };
    } catch (err) {
      if (err instanceof AppError) throw err;

      throw new AppError("Internal server error", 500);
    }
  }

  static async updateStatusOfTheApplication(id: string,mentorId:string,updateStatus:string) {
    try {


      const application = await prisma.studentInternship.findUnique({
        where: {
          id:id
        },
        select: {
          student:true
        }
      })

      if (!application)
        throw new AppError("Application is not found", 404)
      
      if (application.student.mentorId !== mentorId)
        throw new AppError("You are not the mentor for this student", 403)
      let response;
      if (updateStatus === "APPROVED")
      {
        response = await prisma.studentInternship.update({
          where: {
            id:id
          },
          data: {
            status:"ONGOING"
          },
          include: {
            student: {
              include: {
                user:true
              }
            },
            internship:true
          }
        })
      } else {
        response = await prisma.studentInternship.update({
          where: {
            id:id
          },
          data: {
            status:"REJECTED"
          },
          include: {
            student: {
              include: {
                user:true
              }
            },
            internship:true
          }
        })
      }

      return {
        title: response.internship.title,
        companyName: response.internship.companyName,
        salaryPackage: response.internship.salaryPackage,
        
        studentName: response.student.user.name,
        studentDepartment: response.student.user.department,
        studentCgpa: response.student.cgpa,
        
        applicationId: response.id,
        appliedAt: response.appliedAt,
        applicationStatus:response.status
      }

    } catch (err) {
      if (err instanceof AppError)
        throw err
      console.error(err)
      throw new AppError("Internal Server Error",500)
    }
  }
}
