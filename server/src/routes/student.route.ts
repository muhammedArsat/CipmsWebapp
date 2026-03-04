import express from 'express'
import { verifyStudent, verifyToken } from '../middlewares/jwt.middleware.js'
import { StudentController } from '../controllers/student.controller.js'
const route = express.Router()

route.get("/profile-percentage/:id", verifyToken, verifyStudent, StudentController.fetchTheProfileProgress)
route.get("/profile/:id", verifyToken, verifyStudent, StudentController.fetchProfile);
route.put("/profile", verifyToken, verifyStudent, StudentController.updateProfile)
route.get("/recommendations/:id", verifyToken, verifyStudent, StudentController.fetchRecommendedInternships)
export default route