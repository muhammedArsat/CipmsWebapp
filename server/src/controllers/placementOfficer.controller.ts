import { NextFunction, Request, Response } from "express";
import { placementOfficerService } from "../services/placementOfficer.service.js";
import { AppError } from "../utils/AppError.js";
import { AppResponse } from "../utils/AppResponse.js";

export class PlacementOfficerController {
  static async createInternship(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const data = req.body;

      if (
        !data.title ||
        !data.companyName ||
        !data.description ||
        !data.mode ||
        !data.location ||
        !data.postedById
      ) {
        throw new AppError("Missing required fields", 400);
      }
      if (!data.skills || !Array.isArray(data.skills)) {
        throw new AppError("Skills must be an array", 400);
      }
      const response = await placementOfficerService.createInternship(data);

      return res.status(201).json({
        success: true,
        message: "Internship Created successfully",
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAllPostedInternship(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.body;

      if (!id) {
        return AppResponse.badRequest(res, "User Id is missing");
      }

      const response = await placementOfficerService.getAllInternshipPosted(id);

      return AppResponse.success(res, "All Internships fetched", response);
    } catch (err) {
      next(err);
    }
  }

  static async deleteInternship(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id, userId } = req.body;

      if (!id || !userId) {
        return AppResponse.badRequest(
          res,
          "Internship Id and UserId is required",
        );
      }
      const response = await placementOfficerService.deleteInternship(
        id,
        userId,
      );

      return AppResponse.success(res, response.message, response.data);
    } catch (err) {
      next(err);
    }
  }

  static async updateInternship(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { data, userId, id } = req.body;

      if (!data || !userId || !id) {
        return AppResponse.badRequest(res, "Valid fields are missing");
      }

      const response = await placementOfficerService.updateInternship(
        data,
        id,
        userId,
      );

      return AppResponse.success(
        res,
        "Internship updated successfully",
        response,
      );
    } catch (err) {
      next(err);
    }
  }

  static async getDetailsOfPostedInternship(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id, userId } = req.body;

      if (!id || !userId) {
        return AppResponse.badRequest(
          res,
          "Id and User Id fields are required",
        );
      }

      const response =
        await placementOfficerService.getDetailsOfPostedInternship(id, userId);

      return AppResponse.success(
        res,
        "Internship fetched successfully",
        response,
      );
    } catch (err) {
      next(err);
    }
  }
}
