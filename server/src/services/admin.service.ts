import { Role } from "../../generated/index.js";
import prisma from "../configs/prisma.Dbconfig.js";
import XLSX from "xlsx";
import { AppError } from "../utils/AppError.js";
export class AdminService {
  static async uploadPlacementOfficerFromExcel(buffer: Buffer) {
    try {
      console.log("Inside upload");
      const workbook = XLSX.read(buffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      console.log("Raw Excel data:", data);
      console.log("Number of rows:", data.length);

      if (data.length === 0) {
        throw new AppError("Excel file is empty or has no data rows", 400);
      }

      // Create users with placement officer relations
      const results = [];
      const skippedUsers = [];

      for (const row of data) {
        const r = row as Record<string, any>;
        console.log("Processing row:", r);

        const userData = {
          name: r.name || r.Name,
          email: r.email || r.Email,
          department: r.department || r.Department,
          phoneNo: r.phone || r.Phone || r.phoneNo || r.PhoneNo,
          userId: r.userId || r.UserId,
          role: Role.PLACEMENT_OFFICER,
          profileUrl: null,
        };

        console.log("Parsed userData:", userData);

        // Validate required fields
        if (!userData.name || !userData.email || !userData.userId) {
          console.log("Missing required fields for row:", r);
          skippedUsers.push({
            row: r,
            reason: "Missing required fields (name, email, or userId)",
          });
          continue;
        }

        try {
          // Check if user already exists by email or userId
          const existingUser = await prisma.user.findFirst({
            where: {
              OR: [{ email: userData.email }, { userId: userData.userId }],
            },
          });

          if (!existingUser) {
            console.log("Creating new user:", userData.email);
            // Create user with placement officer relation
            const result = await prisma.user.create({
              data: {
                ...userData,
                placementOfficer: {
                  create: {}, // This creates the PlacementOfficer record
                },
              },
            });
            results.push(result);
            console.log("Successfully created user:", result.email);
          } else {
            console.log(
              `User already exists: ${userData.email} or ${userData.userId}`,
            );
            skippedUsers.push({
              userData: userData,
              reason: "User already exists (email or userId duplicate)",
            });
          }
        } catch (error) {
          console.log(`Error creating user: ${userData.email}`, error);
          skippedUsers.push({
            userData: userData,
            reason: `Database error: ${error instanceof Error ? error.message : "Unknown error"}`,
          });
        }
      }

      console.log(
        `Upload complete. Created: ${results.length}, Skipped: ${skippedUsers.length}`,
      );

      return {
        count: results.length,
        skipped: skippedUsers.length,
        skippedDetails: skippedUsers,
        message: `Upload complete. Created: ${results.length}, Skipped: ${skippedUsers.length}`,
      };
    } catch (err) {
      console.error("Prisma Error:", err);
      throw err;
    }
  }

  static async getAllPlacementOfficers(search?: string) {
    try {
      const whereCondition: any = {
        role: "PLACEMENT_OFFICER",
      };

      // Add search functionality
      if (search) {
        whereCondition.OR = [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { userId: { contains: search, mode: "insensitive" } },
          { department: { contains: search, mode: "insensitive" } },
        ];
      }

      const placementOfficers = await prisma.user.findMany({
        where: whereCondition,
        select: {
          id: true,
          userId: true,
          email: true,
          name: true,
          phoneNo: true,
          role: true,
          department: true,
          profileUrl: true,
          isActive: true,
          placementOfficer: {
            select: {
              _count: {
                select: {
                  internships: true,
                },
              },
              internships: {
                select: {
                  id: true,
                  title: true,
                  companyName: true,
                  status: true,
                  createdAt: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const result = placementOfficers.map((officer, idx) => ({
        idx: idx + 1,
        id: officer.id,
        userId: officer.userId,
        email: officer.email,
        name: officer.name,
        profileUrl: officer.profileUrl,
        role: officer.role,
        phoneNo: officer.phoneNo,
        isActive: officer.isActive,
        department: officer.department,
        internshipCount: officer.placementOfficer?._count.internships || 0,
        internships: officer.placementOfficer?.internships || [],
      }));
      return {
        placementOfficer: result,
        total: result.length,
      };
    } catch {}
  }

  static async getPlacementOfficerIndividual(id: string) {
    try {
      const placementOfficer = await prisma.user.findFirst({
        where: { id: id, role: "PLACEMENT_OFFICER" },
        select: {
          id: true,
          userId: true,
          email: true,
          name: true,
          phoneNo: true,
          department: true,
          placementOfficer: {
            select: {
              userId: true,
              internships: {
                select: {
                  id: true,
                  title: true,
                  companyName: true,
                  status: true,
                  createdAt: true,
                },
              },
            },
          },
        },
      });

      if (!placementOfficer) {
        throw new AppError("PlacementOfficer is not found", 404);
      }

      return {
        user: placementOfficer,
        internships: placementOfficer.placementOfficer?.internships || [],
        internshipCount:
          placementOfficer.placementOfficer?.internships.length || 0,
      };
    } catch (err) {
      throw err;
    }
  }

  static async updatePlacementOfficer(id: string, updateData: any) {
    const existingPlacementOfficer = await prisma.user.findUnique({
      where: {
        id: id,
        role: "PLACEMENT_OFFICER",
      },
      include: {
        placementOfficer: true,
      },
    });

    if (!existingPlacementOfficer) {
      throw new AppError("Placement Officer is not existed", 401);
    }

    const userUpdateData: any = {};
    if (updateData.name) userUpdateData.name = updateData.name;
    if (updateData.email) userUpdateData.email = updateData.email;
    if (updateData.phoneNo) userUpdateData.phoneNo = updateData.phoneNo;
    if (updateData.department)
      userUpdateData.department = updateData.department;
    if (updateData.profileUrl)
      userUpdateData.profileUrl = updateData.profileUrl;
    if (updateData.isActive !== undefined)
      userUpdateData.isActive = updateData.isActive;
    if (updateData.userId) userUpdateData.userId = updateData.userId;
    if (updateData.role) userUpdateData.role = updateData.role;
    if (
      updateData.email &&
      updateData.email !== existingPlacementOfficer.email
    ) {
      const emailExists = await prisma.user.findUnique({
        where: { email: updateData.email },
      });
      if (emailExists) {
        throw new AppError("Email already exists", 400);
      }
    }

    if (
      updateData.userId &&
      updateData.userId !== existingPlacementOfficer.userId
    ) {
      const userIdExists = await prisma.user.findUnique({
        where: { userId: updateData.userId },
      });
      if (userIdExists) {
        throw new AppError("User ID already exists", 400);
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: userUpdateData,
    });

    return { user: updatedUser };
  }

  // MENTOR SERVICES
  static async uploadMentorFromExcel(buffer: Buffer) {
    try {
      console.log("Inside mentor upload");
      const workbook = XLSX.read(buffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      console.log(data);

      // Create mentors with mentor relations
      const results = [];
      for (const row of data) {
        const r = row as Record<string, any>;
        const userData = {
          name: r.name || r.Name,
          email: r.email || r.Email,
          department: r.department || r.Department,
          phoneNo: r.phone || r.Phone || r.phoneNo || r.PhoneNo,
          userId: r.userId || r.UserId,
          role: Role.MENTOR,
          profileUrl: null,
        };

        try {
          const existingUser = await prisma.user.findFirst({
            where: {
              OR: [{ email: userData.email }, { userId: userData.userId }],
            },
          });

          console.log("Exisiting User",existingUser)
          if (!existingUser) {
            console.log("Inside the existing user")
            // Create user with mentor relation
            const result = await prisma.user.create({
              data: {
                ...userData,
                mentor: {
                  create: {
                    designation: r.designation || r.Designation,
                    experienceYears:
                      r.experienceYears || r.ExperienceYears || 0,
                  },
                },
              },
            });
            results.push(result);
          }
        } catch (error) {
          console.log(`Error creating mentor: ${userData.email}`, error);
        }
      }

      console.log(results);
      return {
        count: results.length,
        message: "Mentors uploaded successfully",
      };
    } catch (err) {
      console.error("Prisma Error:", err);
      throw err;
    }
  }

  static async getAllMentors(search?: string) {
    try {
      const whereCondition: any = {
        role: "MENTOR",
      };

      if (search) {
        whereCondition.OR = [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { userId: { contains: search, mode: "insensitive" } },
          { department: { contains: search, mode: "insensitive" } },
        ];
      }

      const mentors = await prisma.user.findMany({
        where: whereCondition,
        select: {
          id: true,
          userId: true,
          email: true,
          name: true,
          phoneNo: true,
          role: true,
          department: true,
          profileUrl: true,
          isActive: true,
          createdAt: true,
          mentor: {
            select: {
              designation: true,
              experienceYears: true,
              _count: {
                select: {
                  students: true,
                },
              },
              students: {
                select: {
                  userId: true,
                  user: {
                    select: {
                      name: true,
                      email: true,
                    },
                  },
                },
                take: 5,
              },
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const result = mentors.map((mentor, idx) => ({
        idx: idx + 1,
        id: mentor.id,
        userId: mentor.userId,
        email: mentor.email,
        name: mentor.name,
        profileUrl: mentor.profileUrl,
        role: mentor.role,
        phoneNo: mentor.phoneNo,
        isActive: mentor.isActive,
        department: mentor.department,
        createdAt: mentor.createdAt,
        designation: mentor.mentor?.designation || null,
        experienceYears: mentor.mentor?.experienceYears || 0,
        studentCount: mentor.mentor?._count.students || 0,
        students: mentor.mentor?.students || [],
      }));

      return {
        mentors: result,
        totalCount: result.length,
      };
    } catch (error) {
      console.error("Error in getAllMentors:", error);
      throw new AppError("Failed to fetch mentors", 500);
    }
  }

  static async getMentorIndividual(id: string) {
    try {
      const mentor = await prisma.user.findFirst({
        where: {
          id: id,
          role: "MENTOR",
        },
        select: {
          id: true,
          userId: true,
          email: true,
          name: true,
          phoneNo: true,
          department: true,
          profileUrl: true,
          isActive: true,
          mentor: {
            select: {
              designation: true,
              experienceYears: true,
              students: {
                select: {
                  userId: true,
                  semester: true,
                  year: true,
                  cgpa: true,
                  user: {
                    select: {
                      name: true,
                      email: true,
                      phoneNo: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!mentor) {
        throw new AppError("Mentor not found", 404);
      }

      return {
        user: mentor,
        designation: mentor.mentor?.designation || null,
        experienceYears: mentor.mentor?.experienceYears || 0,
        students: mentor.mentor?.students || [],
        studentCount: mentor.mentor?.students?.length || 0,
      };
    } catch (err) {
      console.error("Error in getMentorIndividual:", err);
      throw err;
    }
  }

  static async updateMentor(id: string, updateData: any) {
    try {
      const existingMentor = await prisma.user.findFirst({
        where: {
          id: id,
          role: "MENTOR",
        },
        include: {
          mentor: true,
        },
      });

      if (!existingMentor) {
        throw new AppError("Mentor not found", 404);
      }

      const userUpdateData: any = {};
      if (updateData.name) userUpdateData.name = updateData.name;
      if (updateData.email) userUpdateData.email = updateData.email;
      if (updateData.phoneNo) userUpdateData.phoneNo = updateData.phoneNo;
      if (updateData.department)
        userUpdateData.department = updateData.department;
      if (updateData.profileUrl)
        userUpdateData.profileUrl = updateData.profileUrl;
      if (updateData.isActive !== undefined)
        userUpdateData.isActive = updateData.isActive;
      if (updateData.userId) userUpdateData.userId = updateData.userId;

      // Check uniqueness
      if (updateData.email && updateData.email !== existingMentor.email) {
        const emailExists = await prisma.user.findUnique({
          where: { email: updateData.email },
        });
        if (emailExists) {
          throw new AppError("Email already exists", 400);
        }
      }

      if (updateData.userId && updateData.userId !== existingMentor.userId) {
        const userIdExists = await prisma.user.findUnique({
          where: { userId: updateData.userId },
        });
        if (userIdExists) {
          throw new AppError("User ID already exists", 400);
        }
      }

      // Prepare mentor update data
      const mentorUpdateData: any = {};
      if (updateData.designation !== undefined)
        mentorUpdateData.designation = updateData.designation;
      if (updateData.experienceYears !== undefined)
        mentorUpdateData.experienceYears = updateData.experienceYears;

      // Update user and mentor data
      const updatedUser = await prisma.user.update({
        where: { id: id },
        data: {
          ...userUpdateData,
          mentor:
            Object.keys(mentorUpdateData).length > 0
              ? {
                  update: mentorUpdateData,
                }
              : undefined,
        },
        include: {
          mentor: {
            include: {
              students: {
                include: {
                  user: {
                    select: {
                      name: true,
                      email: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      return {
        user: updatedUser,
        students: updatedUser.mentor?.students || [],
        studentCount: updatedUser.mentor?.students?.length || 0,
      };
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      console.error("Error updating mentor:", err);
      throw new AppError("Failed to update mentor", 500);
    }
  }

  // STUDENT SERVICES
  static async uploadStudentsFromExcel(buffer: Buffer) {
    try {
      console.log("Inside student upload");
      const workbook = XLSX.read(buffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      console.log(data);

      const results = [];
      for (const row of data) {
      
        const r = row as Record<string, any>;
        const mentorId = r.mentorId || r.MentorId
        const userData = {
          name: r.name || r.Name,
          email: r.email || r.Email,
          department: r.department || r.Department,
          phoneNo: r.phone || r.Phone || r.phoneNo || r.PhoneNo,
          userId: r.userId || r.UserId,
         
          role: Role.STUDENT,
          profileUrl: null,
        };

        try {
          // Check if user already exists by email or userId
          const existingUser = await prisma.user.findFirst({
            where: {
              OR: [{ email: userData.email }, { userId: userData.userId }],
            },
          });

          const exisitngMentor = await prisma.user.findUnique({
            where:{userId:mentorId}
          })
          if (!existingUser) {
            const result = await prisma.user.create({
              data: {
                ...userData,
                student: {
                  create: {
                    semester: r.semester || r.Semester || null,
                    year: r.year || r.Year || null,
                    cgpa: r.cgpa || r.CGPA || null,
                    mentorId:exisitngMentor?.id
                  },
                },
              },
            });
            console.log(result)
            results.push(result);
          }
        } catch (error) {
          console.log(`Error creating student: ${userData.email}`, error);
        }
      }

      return {
        count: results.length,
        message: "Students uploaded successfully",
      };
    } catch (err) {
      console.error("Prisma Error:", err);
      throw err;
    }
  }

  static async getAllStudents(search?: string) {
    try {
      const whereCondition: any = {
        role: "STUDENT",
      };

      if (search) {
        whereCondition.OR = [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { userId: { contains: search, mode: "insensitive" } },
          { department: { contains: search, mode: "insensitive" } },
        ];
      }

      const students = await prisma.user.findMany({
        where: whereCondition,
        select: {
          id: true,
          userId: true,
          email: true,
          name: true,
          phoneNo: true,
          role: true,
          department: true,
          profileUrl: true,
          isActive: true,
          createdAt: true,
          student: {
            select: {
              semester: true,
              year: true,
              cgpa: true,
              profileCompleted: true,
              mentor: {
                select: {
                  user: {
                    select: {
                      name: true,
                      email: true,
                    },
                  },
                },
              },
              _count: {
                select: {
                  internships: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const result = students.map((student, idx) => ({
        idx: idx + 1,
        id: student.id,
        userId: student.userId,
        email: student.email,
        name: student.name,
        profileUrl: student.profileUrl,
        role: student.role,
        phoneNo: student.phoneNo,
        isActive: student.isActive,
        department: student.department,
        createdAt: student.createdAt,
        semester: student.student?.semester || null,
        year: student.student?.year || null,
        cgpa: student.student?.cgpa || null,
        profileCompleted: student.student?.profileCompleted || false,
        mentor: student.student?.mentor?.user || null,
        internshipCount: student.student?._count.internships || 0,
      }));

      return {
        students: result,
        totalCount: result.length,
      };
    } catch (error) {
      console.error("Error in getAllStudents:", error);
      throw new AppError("Failed to fetch students", 500);
    }
  }

  static async getStudentIndividual(id: string) {
    try {
      const student = await prisma.user.findFirst({
        where: {
          id: id,
          role: "STUDENT",
        },
        select: {
          id: true,
          userId: true,
          email: true,
          name: true,
          phoneNo: true,
          department: true,
          profileUrl: true,
          isActive: true,
          student: {
            select: {
              semester: true,
              year: true,
              cgpa: true,
              resumeUrl: true,
              profileCompleted: true,
              mentor: {
                select: {
                  user: {
                    select: {
                      name: true,
                      email: true,
                      phoneNo: true,
                    },
                  },
                },
              },
              internships: {
                select: {
                  internship: {
                    select: {
                      id: true,
                      title: true,
                      companyName: true,
                      status: true,
                    },
                  },
                  status: true,
                  appliedAt: true,
                },
              },
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
        throw new AppError("Student not found", 404);
      }

      return {
        user: student,
        semester: student.student?.semester || null,
        year: student.student?.year || null,
        cgpa: student.student?.cgpa || null,
        resumeUrl: student.student?.resumeUrl || null,
        profileCompleted: student.student?.profileCompleted || false,
        mentor: student.student?.mentor?.user || null,
        internships: student.student?.internships || [],
        skills: student.student?.skills?.map((s) => s.skill.name) || [],
        internshipCount: student.student?.internships?.length || 0,
      };
    } catch (err) {
      console.error("Error in getStudentIndividual:", err);
      throw err;
    }
  }

  static async updateStudent(id: string, updateData: any) {
    try {
      const existingStudent = await prisma.user.findFirst({
        where: {
          id: id,
          role: "STUDENT",
        },
        include: {
          student: true,
        },
      });

      if (!existingStudent) {
        throw new AppError("Student not found", 404);
      }

      const userUpdateData: any = {};
      if (updateData.name) userUpdateData.name = updateData.name;
      if (updateData.email) userUpdateData.email = updateData.email;
      if (updateData.phoneNo) userUpdateData.phoneNo = updateData.phoneNo;
      if (updateData.department)
        userUpdateData.department = updateData.department;
      if (updateData.profileUrl)
        userUpdateData.profileUrl = updateData.profileUrl;
      if (updateData.isActive !== undefined)
        userUpdateData.isActive = updateData.isActive;
      if (updateData.userId) userUpdateData.userId = updateData.userId;

      // Check uniqueness
      if (updateData.email && updateData.email !== existingStudent.email) {
        const emailExists = await prisma.user.findUnique({
          where: { email: updateData.email },
        });
        if (emailExists) {
          throw new AppError("Email already exists", 400);
        }
      }

      if (updateData.userId && updateData.userId !== existingStudent.userId) {
        const userIdExists = await prisma.user.findUnique({
          where: { userId: updateData.userId },
        });
        if (userIdExists) {
          throw new AppError("User ID already exists", 400);
        }
      }

      // Prepare student update data
      const studentUpdateData: any = {};
      if (updateData.semester !== undefined)
        studentUpdateData.semester = updateData.semester;
      if (updateData.year !== undefined)
        studentUpdateData.year = updateData.year;
      if (updateData.cgpa !== undefined)
        studentUpdateData.cgpa = updateData.cgpa;
      if (updateData.resumeUrl !== undefined)
        studentUpdateData.resumeUrl = updateData.resumeUrl;
      if (updateData.profileCompleted !== undefined)
        studentUpdateData.profileCompleted = updateData.profileCompleted;
      if (updateData.mentorId !== undefined)
        studentUpdateData.mentorId = updateData.mentorId;

      // Update user and student data
      const updatedUser = await prisma.user.update({
        where: { id: id },
        data: {
          ...userUpdateData,
          student:
            Object.keys(studentUpdateData).length > 0
              ? {
                  update: studentUpdateData,
                }
              : undefined,
        },
        include: {
          student: {
            include: {
              mentor: {
                include: {
                  user: true,
                },
              },
              internships: {
                include: {
                  internship: true,
                },
              },
            },
          },
        },
      });

      return {
        user: updatedUser,
        mentor: updatedUser.student?.mentor?.user || null,
        internships: updatedUser.student?.internships || [],
        internshipCount: updatedUser.student?.internships?.length || 0,
      };
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      console.error("Error updating student:", err);
      throw new AppError("Failed to update student", 500);
    }
  }
}
