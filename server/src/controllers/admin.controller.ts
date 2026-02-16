import { NextFunction, Request, Response } from "express";
import { AdminService } from "../services/admin.service.js";
import { AppError } from "../utils/AppError.js";
import { Multer } from "multer";

// Extend Express Request interface to include 'file' property
declare global {
  namespace Express {
    interface Request {
      file?: Multer.File;
    }
  }
}

export const handleAdminUpload = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.file) {
      throw new AppError("No file uploaded", 400);
    }

    if (
      !req.file.mimetype.includes("excel") &&
      !req.file.mimetype.includes("spreadsheet")
    ) {
      throw new AppError("Please upload an Excel file", 400);
    }
    console.log("Entered the process")

    const result = await AdminService.uploadPlacementOfficerFromExcel(
      req.file.buffer,
    );

    console.log("process is over");

    return res.status(200).json({
      success: true,
      message: result.message,
      data: {
        count: result.count,
      },
    });
  } catch (err) {}
};

export const getAllPlacementOfficer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { search } = req.query;

    const result = await AdminService.getAllPlacementOfficers(search as string);

    return res.status(200).json({
      success: true,
      message: "All placement officer details fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const getIndividualPlacementOfficer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new AppError("Id is missing", 400);
    }

    if (Array.isArray(id)) {
      throw new AppError("Invalid id format", 400);
    }

    const result = await AdminService.getPlacementOfficerIndividual(id);

    return res.status(200).json({
      success: true,
      message: "Placement Officer detail fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const updatePlacementOfficer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Validation
    if (!id) {
      throw new AppError("Placement Officer ID is required", 400);
    }

    // Optional: Add validation for specific fields
    const allowedFields = [
      "idx",
      "internships",
      "internshipCount",
      "id",
      "name",
      "email",
      "phoneNo",
      "department",
      "profileUrl",
      "isActive",
      "userId",
      "role",
    ];
    const invalidFields = Object.keys(updateData).filter(
      (key) => !allowedFields.includes(key),
    );

    if (invalidFields.length > 0) {
      throw new AppError(`Invalid fields: ${invalidFields.join(", ")}`, 400);
    }

    // Validate email format if provided
    if (updateData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(updateData.email)) {
        throw new AppError("Invalid email format", 400);
      }
    }

    // Validate phone number format if provided
    if (updateData.phoneNo) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(updateData.phoneNo)) {
        throw new AppError(
          "Invalid phone number format. Must be 10 digits",
          400,
        );
      }
    }

    if (Array.isArray(id)) {
      throw new AppError("Invalid id format", 400);
    }
    const result = await AdminService.updatePlacementOfficer(id, updateData);
    return res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
