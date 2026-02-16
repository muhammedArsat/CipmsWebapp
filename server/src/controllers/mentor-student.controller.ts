import { Request, Response, NextFunction } from "express";
import { AdminService } from "../services/admin.service.js";
import { AppError } from "../utils/AppError.js";

// MENTOR CONTROLLERS
export const handleMentorUpload = async (
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

    const result = await AdminService.uploadMentorFromExcel(req.file.buffer);

    return res.status(200).json({
      success: true,
      message: result.message,
      data: {
        count: result.count,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getAllMentors = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { search } = req.query;

    const result = await AdminService.getAllMentors(search as string);

    return res.status(200).json({
      success: true,
      message: "All mentor details fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const getIndividualMentor = async (
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

    const result = await AdminService.getMentorIndividual(id);

    return res.status(200).json({
      success: true,
      message: "Mentor detail fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const updateMentor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!id) {
      throw new AppError("Mentor ID is required", 400);
    }

    if (Array.isArray(id)) {
      throw new AppError("Invalid id format", 400);
    }

    const allowedFields = [
      "name",
      "email",
      "phoneNo",
      "department",
      "profileUrl",
      "isActive",
      "userId",
      "designation",
      "experienceYears",
    ];
    const invalidFields = Object.keys(updateData).filter(
      (key) => !allowedFields.includes(key),
    );

    if (invalidFields.length > 0) {
      throw new AppError(`Invalid fields: ${invalidFields.join(", ")}`, 400);
    }

    if (updateData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(updateData.email)) {
        throw new AppError("Invalid email format", 400);
      }
    }

    if (updateData.phoneNo) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(updateData.phoneNo)) {
        throw new AppError(
          "Invalid phone number format. Must be 10 digits",
          400,
        );
      }
    }

    const result = await AdminService.updateMentor(id, updateData);
    return res.status(200).json({
      success: true,
      message: "Mentor updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// STUDENT CONTROLLERS
export const handleStudentUpload = async (
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

    const result = await AdminService.uploadStudentsFromExcel(req.file.buffer);

    return res.status(200).json({
      success: true,
      message: result.message,
      data: {
        count: result.count,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { search } = req.query;

    const result = await AdminService.getAllStudents(search as string);

    return res.status(200).json({
      success: true,
      message: "All student details fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const getIndividualStudent = async (
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

    const result = await AdminService.getStudentIndividual(id);

    return res.status(200).json({
      success: true,
      message: "Student detail fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const updateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!id) {
      throw new AppError("Student ID is required", 400);
    }

    if (Array.isArray(id)) {
      throw new AppError("Invalid id format", 400);
    }

    const allowedFields = [
      "name",
      "email",
      "phoneNo",
      "department",
      "profileUrl",
      "isActive",
      "userId",
      "semester",
      "year",
      "cgpa",
      "resumeUrl",
      "profileCompleted",
      "mentorId",
    ];
    const invalidFields = Object.keys(updateData).filter(
      (key) => !allowedFields.includes(key),
    );

    if (invalidFields.length > 0) {
      throw new AppError(`Invalid fields: ${invalidFields.join(", ")}`, 400);
    }

    if (updateData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(updateData.email)) {
        throw new AppError("Invalid email format", 400);
      }
    }

    if (updateData.phoneNo) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(updateData.phoneNo)) {
        throw new AppError(
          "Invalid phone number format. Must be 10 digits",
          400,
        );
      }
    }

    const result = await AdminService.updateStudent(id, updateData);
    return res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
