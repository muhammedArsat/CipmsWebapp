import express, { Request, Response } from "express";
import AuthRoutes from "./routes/auth.routes.js";
import AdminRoutes from './routes/admin.route.js'
import PlacementOfficerRoutes from './routes/PlacementOfficer.route.js'
import DashboardRoutes from './routes/dashboard.route.js'
import InternshipRoutes from './routes/internship.route.js'
import StudentRoutes from './routes/student.route.js'
import MentorRoutes from './routes/mentor.route.js'
import cookieParser from "cookie-parser"
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
app.use("/api/v1/admin", AdminRoutes);
app.use("/api/v1/placementOfficer", PlacementOfficerRoutes)
app.use('/api/v1/dashboard', DashboardRoutes)
app.use("/api/v1/internships", InternshipRoutes)
app.use("/api/v1/students", StudentRoutes)
app.use("/api/v1/mentors",MentorRoutes)
app.use(globalErrorHandler)

export default app;
