import cloudinary from "../configs/cloudinary.config.js";
import { AppError } from "../utils/AppError.js";

export class CloudinaryService {
  static async uploadResume(
    file: Express.Multer.File,
    userId: string,
  ): Promise<string> {
    try {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: `resumes/${userId}`,
            resource_type: "raw", // For non-image files
            public_id: `resume_${Date.now()}`,
            format: file.originalname.split(".").pop(),
          },
          (error, result) => {
            if (error) {
              reject(new AppError("Failed to upload resume", 500));
            } else {
              resolve(result!.secure_url);
            }
          },
        );

        uploadStream.end(file.buffer);
      });
    } catch (error) {
      throw new AppError("Failed to upload resume to Cloudinary", 500);
    }
  }

  static async deleteResume(resumeUrl: string): Promise<void> {
    try {
      // Extract public_id from URL
      const parts = resumeUrl.split("/");
      const publicIdWithExtension = parts.slice(-2).join("/");
      const publicId = publicIdWithExtension.split(".")[0];

      await cloudinary.uploader.destroy(publicId, { resource_type: "raw" });
    } catch (error) {
      console.error("Error deleting resume from Cloudinary:", error);
      // Don't throw error, just log it
    }
  }
}
