import multer from "multer";
import path from "path";
import { AppError } from "../utils/AppError.js";

// Use memory storage to keep file in memory before uploading to Cloudinary
const storage = multer.memoryStorage();

// File filter for resume uploads
const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new AppError("Only PDF and Word documents are allowed", 400), false);
  }
};

export const uploadResume = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});
