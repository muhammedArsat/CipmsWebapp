import express from "express";
import passport from "passport";
import { CLIENT_URL } from "../configs/env.config.js";
import { googleCallback, logout, profile } from "../controllers/auth.controllers.js";
import { verifyAdmin, verifyMentor, verifyPlacementOfficer, verifyStudent, verifyToken } from "../middlewares/jwt.middleware.js"
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


routes.get("/getMe", verifyToken, profile)
routes.post("/logout", logout);




export default routes