import { NextFunction, Request, Response } from "express";
import { MentorService } from "../services/mentor.service.js";
import { AppResponse } from "../utils/AppResponse.js";

export class MentorController {
  static async fetchAllApplications(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;

      if (!id) return AppResponse.badRequest(res, "Missing required fields");

      const applications = await MentorService.getAllAppliedApplications(
        id as string,
      );
      return AppResponse.success(
        res,
        "Application fetched successfully",
        applications,
      );
    } catch (err) {
      next(err);
    }
  }

  static async updateApplication(req: Request, res: Response, next: NextFunction) {
    try {
      
      const { id,mentorId } = req.params
      const { updateStatus } = req.query
      
      if (!id || !mentorId || !updateStatus)
        return AppResponse.badRequest(res, "Required Inputs are missing");

      const data = await MentorService.updateStatusOfTheApplication(id as string, mentorId as string, updateStatus as string)
      
      return AppResponse.success(res,"Application updated successfully",data)

    } catch (err) {
      next(err)
    }
  }
}
