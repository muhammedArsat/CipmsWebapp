import { NextFunction, Request, Response } from "express"
import { AppError } from "../utils/AppError.js"
import { AppResponse } from "../utils/AppResponse.js"
import { DashboardService } from "../services/Dashboard.service.js"


export class DashboardController{

    static async getDashboardStats(req:Request, res:Response, next:NextFunction) {
        try {
            
            const { userId } = req.query
            
            const response = await DashboardService.getDashboardStats(userId as string)

            return AppResponse.success(res, "Dashboard stats fetched successfully", response)
        } catch (err) {
            if (err instanceof AppError) {
                next(err)
            }

            throw new AppError("Internal server Error",500)
        }
    }

    static async getInternshipMonth(req: Request, res: Response, next: NextFunction) {
        try {
            
            const { userId } = req.query;
            
            if (!userId) {
                return AppResponse.badRequest(res,"User Id is missing")
            }

            let data;
            data = await DashboardService.getMonthlyInternshipsData(userId as string)

            return AppResponse.success(
              res,
              "Monthly data fetched successfully",
              data,
            );
        } catch (err) {
            next(err)
        }
    }
}