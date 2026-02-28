import express from 'express'
import { verifyToken } from '../middlewares/jwt.middleware.js'
import { InternshipController } from '../controllers/Internship.controller.js'

const route = express.Router()

route.get("/", verifyToken, InternshipController.fetchInternships)
route.get("/detail/:id",verifyToken, InternshipController.fetchParticularInternship)

export default route