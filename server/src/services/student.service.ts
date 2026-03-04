import prisma from "../configs/prisma.Dbconfig.js";
import { AppError } from "../utils/AppError.js";

export class StudentService {
  static async fetchTheProfileProgress(id: string) {
    try {
      const student = await prisma.user.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          phoneNo: true,
          department: true,
          profileUrl: true,
          student: {
            select: {
              semester: true,
              year: true,
              cgpa: true,
              resumeUrl: true,
              skills: true,
            },
          },
        },
      });

      if (!student) {
        throw new AppError("Student is not found", 404);
      }

      // Check fields from both User and Student models
      const profileFields = {
        name: student.name,
        email: student.email,
        phoneNo: student.phoneNo,
        department: student.department,
        semester: student.student?.semester,
        year: student.student?.year,
        cgpa: student.student?.cgpa,
        resumeUrl: student.student?.resumeUrl,
        skills: student.student?.skills,
      };

      const completedFields = Object.values(profileFields).filter((value) => {
        if (Array.isArray(value)) {
          return value.length > 0;
        }
        return value !== null && value !== undefined && value !== "";
      });

      const completionPercentage = Math.round(
        (completedFields.length / Object.keys(profileFields).length) * 100,
      );

      console.log(completionPercentage);
      return {
        completionPercentage,
      };
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      console.error(err);
      throw new AppError("Internal server error", 500);
    }
  }

  static async fetchProfileData(id: string) {
    try {
      const student = await prisma.user.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          phoneNo: true,
          department: true,
          profileUrl: true,
          student: {
            select: {
              semester: true,
              year: true,
              cgpa: true,
              resumeUrl: true,
              skills: {
                select: {
                  skill: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!student) {
        throw new AppError("Student is not found", 404);
      }

      return {
        id: student.id,
        name: student.name,
        email: student.email,
        phoneNo: student.phoneNo,
        profileUrl: student.profileUrl,
        department: student.department,
        semester: student.student?.semester,
        year: student.student?.year,
        cgpa: student.student?.cgpa,
        resumeUrl: student.student?.resumeUrl,
        skills: student.student?.skills,
      };
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      throw new AppError("Internal server error", 500);
    }
  }

  static async updateProfile(
    id: string,
    data: {
      name?: string;
      phoneNo?: string;
      department?: string;
      semester?: number;
      year?: number;
      cgpa?: number;
      resumeUrl?: string;
      skills?: string[]; // Array of skill names
    },
  ) {
    try {
      // Verify user exists and is a student
      const user = await prisma.user.findUnique({
        where: { id },
        include: { student: true },
      });

      if (!user) {
        throw new AppError("User not found", 404);
      }

      if (user.role !== "STUDENT") {
        throw new AppError("User is not a student", 403);
      }

      // Update User fields
      const userUpdateData: any = {};
      if (data.name !== undefined) userUpdateData.name = data.name;
      if (data.phoneNo !== undefined) userUpdateData.phoneNo = data.phoneNo;
      if (data.department !== undefined)
        userUpdateData.department = data.department;

      // Update Student fields
      const studentUpdateData: any = {};
      if (data.semester !== undefined)
        studentUpdateData.semester = data.semester;
      if (data.year !== undefined) studentUpdateData.year = data.year;
      if (data.cgpa !== undefined) studentUpdateData.cgpa = data.cgpa;
      if (data.resumeUrl !== undefined)
        studentUpdateData.resumeUrl = data.resumeUrl;

      // Use transaction to update both tables
      const updatedUser = await prisma.$transaction(async (tx) => {
        // Update User table
        if (Object.keys(userUpdateData).length > 0) {
          await tx.user.update({
            where: { id },
            data: userUpdateData,
          });
        }

        // Update or create Student record
        if (!user.student) {
          await tx.student.create({
            data: {
              userId: id,
              ...studentUpdateData,
              profileCompleted: 0,
            },
          });
        } else if (Object.keys(studentUpdateData).length > 0) {
          await tx.student.update({
            where: { userId: id },
            data: studentUpdateData,
          });
        }

        // Handle skills update
        if (data.skills && data.skills.length > 0) {
          // Delete existing skills
          await tx.studentSkill.deleteMany({
            where: { studentId: user.student?.userId || id },
          });

          // Add new skills
          for (const skillName of data.skills) {
            // Find or create skill
            let skill = await tx.skill.findUnique({
              where: { name: skillName },
            });

            if (!skill) {
              skill = await tx.skill.create({
                data: { name: skillName },
              });
            }

            // Create StudentSkill relation
            await tx.studentSkill.create({
              data: {
                studentId: user.student?.userId || id,
                skillId: skill.id,
              },
            });
          }
        }

        // Calculate and update profile completion
        const profileProgress = await this.fetchTheProfileProgress(id);
        await tx.student.update({
          where: { userId: id },
          data: {
            profileCompleted: profileProgress.completionPercentage === 100,
          },
        });

        // Return updated user data
        return await tx.user.findUnique({
          where: { id },
          select: {
            id: true,
            name: true,
            email: true,
            phoneNo: true,
            department: true,
            profileUrl: true,
            student: {
              select: {
                semester: true,
                year: true,
                cgpa: true,
                resumeUrl: true,
                profileCompleted: true,
                skills: {
                  select: {
                    skill: {
                      select: {
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });
      });

      return updatedUser;
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      console.error(err);
      throw new AppError("Failed to update profile", 500);
    }
  }

  static async recommendedInternship(id: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
        select: {
          role:true,
          student: {
            select: {
              skills: {
                select: {
                  skill: {
                    select: {
                      id:true,
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!user) throw new AppError("User not found", 404);
      
      if (user?.role !== "STUDENT")
        throw new AppError("User is not student", 403)
      
      if (!user.student || user.student.skills.length === 0) {
        return {
          message: "Please add skills to your profile to get recommendations",
          internships: [],
        };
      }

      const studentSkillIds = user.student.skills.map((s) => s.skill.id);
     
      const internships = await prisma.internship.findMany({
        where: {
          skills: {
            some: {
              skillId: {
                in: studentSkillIds
              }
            }
          },
          status: "OPEN",
          applicationDeadline: {
            gte:new Date()
          }
        
        },
        select: {
          id:true,
          companyName: true,
          companyLogo: true,
          companyUrl: true,
          title: true,
          location: true,
          salaryPackage: true,
          minCgpa: true,
          applicationDeadline: true,
          
          duration:true,
          status: true,
          _count: {
            select: {
              applicants:true
            }
          },
          skills: {
            select: {
              skill:true
            }
          }
        },
        orderBy: {
          createdAt:"desc"
        }
      })


      const recommendedInternships = internships.map((internship) => {
        const internshipSkillIds = internship.skills.map((s) => s.skill.id);
        const matchingSkills = studentSkillIds.filter((skillId) =>
          internshipSkillIds.includes(skillId),
        );
        const matchPercentage = Math.round(
          (matchingSkills.length / internshipSkillIds.length) * 100,
        );

        return {
          id: internship.id,
          title: internship.title,
          
          location: internship.location,
          duration: internship.duration,
          salary: internship.salaryPackage,
          deadline: internship.applicationDeadline,
          status: internship.status,
          company: internship.companyName,
          skills: internship.skills.map((s) => s.skill),
          applicationCount: internship._count.applicants,
          matchPercentage,
          matchingSkills: matchingSkills.length,
          totalRequiredSkills: internshipSkillIds.length,
          companyLogo: internship.companyLogo,
          salaryPackage:internship.salaryPackage
        };
      });

      // Sort by match percentage (highest first)
      recommendedInternships.sort(
        (a, b) => b.matchPercentage - a.matchPercentage,
      );

       return {
         total: recommendedInternships.length,
         studentSkills: user.student.skills.map((s) => s.skill.name),
         internships: recommendedInternships,
       };
      
    } catch (err) {
      if (err instanceof AppError) throw err;
      console.log(err);
      throw new AppError("Internal server Error", 500);
    }
  }
}
