import express from 'express'
import { verifyPlacementOfficer, verifyToken } from '../middlewares/jwt.middleware.js'
import { DashboardController } from '../controllers/dashboard.controller.js'

const routes = express.Router()


routes.get("/", verifyToken, verifyPlacementOfficer, DashboardController.getDashboardStats)
routes.get("/chart",verifyToken,DashboardController.getInternshipMonth)

export default routes