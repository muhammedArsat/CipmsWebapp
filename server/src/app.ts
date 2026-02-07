import express, { Request, Response } from "express";
import AuthRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import passport from "./configs/passport.config.js";
import cors from "cors";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import { CLIENT_URL } from "./configs/env.config.js";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  }),
);
app.use(passport.initialize());

app.use("/api/v1/auth", AuthRoutes);


app.use(globalErrorHandler)

export default app;
