import { NextFunction, Request, Response } from "express";
import { AppResponse } from "../utils/AppResponse.js";
import { InternshipService } from "../services/internship.service.js";

export class InternshipController {
  static async fetchInternships(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const data = await InternshipService.fetchAllInternship();

      return AppResponse.success(res, "Internships fetched Successfully", data);
    } catch (err) {
      next(err);
    }
  }

  static async fetchParticularInternship(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      console.log(id)
      const data = await InternshipService.fetchParticularInternship(
        id as string,
      );

      return AppResponse.success(res, "Internship fetched successfully", data);
    } catch (err) {
      next(err);
    }
  }
}
