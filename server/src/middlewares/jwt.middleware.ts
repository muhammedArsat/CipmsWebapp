import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError.js";
import { JWT_SECRET } from "../configs/env.config.js";
import { User } from "../generated/prisma/client.js";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      throw new AppError("Token is missing", 401);
    }

    if (!JWT_SECRET) {
      throw new AppError("Secret Key is missing", 500);
    }

    const decode = jwt.verify(token, JWT_SECRET);

    req.user = decode;

    next();
  } catch (err) {
    next(err);
  }
};

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user as User;

    if (user?.role !== "ADMIN") {
      throw new AppError("You are unauthorized", 403);
    }
    next();
  } catch (err) {
    next(err);
  }
};
export const verifyPlacementOfficer = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user as User;

    if (user?.role !== "PLACEMENT_OFFICER") {
      throw new AppError("You are unauthorized", 403);
    }
    next();
  } catch (err) {
    next(err);
  }
};
export const verifyMentor = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user as User;

    if (user?.role !== "MENTOR") {
      throw new AppError("You are unauthorized", 403);
    }
    next();
  } catch (err) {
    next(err);
  }
};
export const verifyStudent = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user as User;

    if (user?.role !== "STUDENT") {
      throw new AppError("You are unauthorized", 403);
    }
    next();
  } catch (err) {
    next(err);
  }
};
