import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
import { AppResponse } from "../utils/AppResponse.js";
import { StudentService } from "../services/student.service.js";
import { CloudinaryService } from "../services/cloudinary.service.js";

export class StudentController {
  static async fetchTheProfileProgress(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      if (!id) {
        return AppResponse.badRequest(res, "Id is missing");
      }

      const data = await StudentService.fetchTheProfileProgress(id as string);

      return AppResponse.success(res, "Progress fetched", data);
    } catch (err) {
      next(err);
    }
  }

  static async fetchProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!id) {
        return AppResponse.badRequest(res, "Id is missing");
      }
      const data = await StudentService.fetchProfileData(id as string);

      return AppResponse.success(res, "Fetched successfully", data);
    } catch (err) {
      next(err);
    }
  }

  static async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body)
      console.log(req.file)
      const { id } = req.body;
      
      const userId = id;

      if (!userId) {
        return AppResponse.unauthorized(res, "Unauthorized");
      }

      // When using FormData, req.body contains the text fields
      const { name, phoneNo, department, semester, year, cgpa, skills } =
        req.body;

      // Parse skills if it's sent as JSON string
      let parsedSkills;
      if (skills) {
        try {
          parsedSkills =
            typeof skills === "string" ? JSON.parse(skills) : skills;
        } catch (e) {
          parsedSkills = Array.isArray(skills) ? skills : [skills];
        }
      }

      // Handle resume upload if file is provided
      let resumeUrl: string | undefined;
      if (req.file) {
        resumeUrl = await CloudinaryService.uploadResume(req.file, userId);
      }

      const updatedProfile = await StudentService.updateProfile(userId, {
        name,
        phoneNo,
        department,
        semester: semester ? Number(semester) : undefined,
        year: year ? Number(year) : undefined,
        cgpa: cgpa ? Number(cgpa) : undefined,
        resumeUrl,
        skills: parsedSkills,
      });

      return AppResponse.success(
        res,
        "Profile updated successfully",
        updatedProfile,
      );
    } catch (err) {
      next(err);
    }
  }

  static async fetchRecommendedInternships(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      if (!id) {
        return AppResponse.badRequest(res, "User id is missing");
      }

      const recommendedInternship = await StudentService.recommendedInternship(
        id as string,
      );

      return AppResponse.success(
        res,
        "Fetched successfully",
        recommendedInternship,
      );
    } catch (err) {
      next(err);
    }
  }

  static async applyInternship(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      // If using FormData
      const studentId = req.body.studentId; // From auth middleware
      const internshipId = req.body.internshipId;

      if (!studentId || !internshipId) {
        return AppResponse.badRequest(
          res,
          "Student ID or Internship ID is missing",
        );
      }

      const response = await StudentService.applyInternship(
        studentId,
        internshipId,
      );
      return AppResponse.success(
        res,
        "Internship Applied successfully",
        response,
      );
    } catch (err) {
      next(err);
    }
  }

  

  static async fetchAllApplications(req: Request, res: Response, next: NextFunction) {
    try {
      
      const { studentId } = req.params
      
      if (!studentId)
        return AppResponse.badRequest(res, "Invalid format")
      
      const data = await StudentService.fetchApplications(studentId as string)

      return AppResponse.success(res,"Applications fetched successfully", data)

    } catch (err) {
      next(err)
    }
  }


  static async uploadCertificate(req: Request, res: Response, next: NextFunction) {
    try {
      const { applicationId, userId } = req.body
      const file = req.file

      if (!file) {
      return AppResponse.badRequest(res, "No file uploaded")
      }
      
      const result = await StudentService.uploadCertificate(applicationId as string,userId as string,file)
  

      return AppResponse.success(res, "Certificate uploaded successfully",result)
    } catch (err) {
      next(err)
    }
  }
}
