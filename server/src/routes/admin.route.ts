import express from "express";
import { verifyAdmin, verifyToken } from "../middlewares/jwt.middleware.js";
import { uploadExcel } from "../middlewares/multer.middleware.js";
import {
  getAllPlacementOfficer,
  getIndividualPlacementOfficer,
  handleAdminUpload,
  updatePlacementOfficer,
} from "../controllers/admin.controller.js";
import {
  handleMentorUpload,
  getAllMentors,
  getIndividualMentor,
  updateMentor,
  handleStudentUpload,
  getAllStudents,
  getIndividualStudent,
  updateStudent,
} from "../controllers/mentor-student.controller.js";

const router = express.Router();

// PLACEMENT OFFICER ROUTES
router.post(
  "/upload-placementOfficer",
  verifyToken,
  verifyAdmin,
  uploadExcel.single("file"),
  handleAdminUpload,
);
router.get(
  "/PLACEMENTOFFICER",
  verifyToken,
  verifyAdmin,
  getAllPlacementOfficer,
);
router.get(
  "/placementOfficer/:id",
  verifyToken,
  verifyAdmin,
  getIndividualPlacementOfficer,
);
router.put(
  "/placementOfficer/:id",
  verifyToken,
  verifyAdmin,
  updatePlacementOfficer,
);

// MENTOR ROUTES
router.post(
  "/upload-mentors",
  verifyToken,
  verifyAdmin,
  uploadExcel.single("file"),
  handleMentorUpload,
);
router.get("/MENTOR", verifyToken, verifyAdmin, getAllMentors);
router.get("/mentor/:id", verifyToken, verifyAdmin, getIndividualMentor);
router.put("/mentor/:id", verifyToken, verifyAdmin, updateMentor);

// STUDENT ROUTES
router.post(
  "/upload-students",
  verifyToken,
  verifyAdmin,
  uploadExcel.single("file"),
  handleStudentUpload,
);
router.get("/STUDENT", verifyToken, verifyAdmin, getAllStudents);
router.get("/student/:id", verifyToken, verifyAdmin, getIndividualStudent);
router.put("/student/:id", verifyToken, verifyAdmin, updateStudent);

export default router;
