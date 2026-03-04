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
        const {id} = req.body;
        const userId = id
console.log(userId)
      if (!userId) {
        return AppResponse.unauthorized(res, "Unauthorized");
      }

      const { name, phoneNo, department, semester, year, cgpa, skills } =
        req.body;

      // Handle resume upload if file is provided
      let resumeUrl: string | undefined;
      if (req.file) {
        // Upload to Cloudinary
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
        skills: skills  ? skills : undefined, // Parse if sent as JSON string
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

//   static async uploadResume(req: Request, res: Response, next: NextFunction) {
//     try {
//       const {userId} = req.params

//       if (!userId) {
//         return AppResponse.unauthorized(res, "Unauthorized");
//       }

//       if (!req.file) {
//         return AppResponse.badRequest(res, "Resume file is required");
//       }

//       // Upload to Cloudinary
//       const resumeUrl = await CloudinaryService.uploadResume(req.file, userId as string);

//       // Update student profile with resume URL
//       const updatedProfile = await StudentService.updateProfile(userId as string, {
//         resumeUrl,
//       });

//       return AppResponse.success(res, "Resume uploaded successfully", {
//         resumeUrl,
//         profile: updatedProfile,
//       });
//     } catch (err) {
//       next(err);
//     }
//   }

//   static async deleteResume(req: Request, res: Response, next: NextFunction) {
//     try {
//       const userId = req.user?.id;

//       if (!userId) {
//         return AppResponse.unauthorized(res, "Unauthorized");
//       }

//       // Get current resume URL
//       const profile = await StudentService.fetchProfileData(userId);

//       if (!profile.resumeUrl) {
//         return AppResponse.badRequest(res, "No resume found");
//       }

//       // Delete from Cloudinary
//       await CloudinaryService.deleteResume(profile.resumeUrl);

//       // Update student profile to remove resume URL
//       await StudentService.updateProfile(userId, {
//         resumeUrl: null as any,
//       });

//       return AppResponse.success(res, "Resume deleted successfully", null);
//     } catch (err) {
//       next(err);
//     }
    //   }
    
    static async fetchRecommendedInternships(req: Request, res: Response, next: NextFunction) {
        try {

            const { id } = req.params
            if (!id) {
                return AppResponse.badRequest(res,"User id is missing")
            }
            
            const recommendedInternship = await StudentService.recommendedInternship(id as string)

            return AppResponse.success(res,"Fetched successfully",recommendedInternship)
        } catch (err)
        {
            next(err)
        }
    }
}
