import express from "express";
import passport from "passport";
import { CLIENT_URL } from "../configs/env.config.js";
import { googleCallback } from "../controllers/auth.controllers.js";
const routes = express.Router();

routes.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "consent",
    session: false,
  }),
);

routes.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${CLIENT_URL}`,
  }),
  googleCallback,
);


export default routes