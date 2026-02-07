import { Request, Response } from "express";

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

  res.redirect(`${CLIENT_URL}/internship`);
};
