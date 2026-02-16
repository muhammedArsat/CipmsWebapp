import { NextFunction, Request, Response } from "express";

import { AuthService } from "../services/auth.service.js";
import { CLIENT_URL, NODE } from "../configs/env.config.js";
import { User } from "../../generated/client.js";

export const googleCallback = async (req: Request, res: Response) => {
  const user = req.user as User;
  const token = await AuthService.handleGoogleLogin(user);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: NODE === "production" ? true : false,
  });

  res.redirect(`${CLIENT_URL}/internships`);
};

export const profile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await AuthService.handleProfile((req.user as User).id);
    return res.status(200).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req: Request, res: Response) => {
  
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: NODE === "production" ? true : false,
  });
  return res.status(200).json({
    message: "Logged out successfully",
  });
};
