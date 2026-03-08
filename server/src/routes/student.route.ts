import express from 'express'
import { verifyStudent, verifyToken } from '../middlewares/jwt.middleware.js'
import { StudentController } from '../controllers/student.controller.js'
import { uploadCertificate, uploadResume } from '../middlewares/upload.middleware.js'
const route = express.Router()

route.get("/profile-percentage/:id", verifyToken, verifyStudent, StudentController.fetchTheProfileProgress)
route.get("/profile/:id", verifyToken, verifyStudent, StudentController.fetchProfile);
route.put("/profile", verifyToken, verifyStudent,uploadResume.single("resume"), StudentController.updateProfile)
route.get("/recommendations/:id", verifyToken, verifyStudent, StudentController.fetchRecommendedInternships)
route.post("/internship-apply",verifyToken, verifyStudent, StudentController.applyInternship)
route.get("/applications/:studentId", verifyToken, verifyStudent, StudentController.fetchAllApplications)
route.put("/certificates",verifyToken, verifyStudent,uploadCertificate.single("certificate"),StudentController.uploadCertificate)
export default route