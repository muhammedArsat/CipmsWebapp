import express from "express";
import { verifyPlacementOfficer, verifyToken } from "../middlewares/jwt.middleware.js"
import { PlacementOfficerController } from "../controllers/placementOfficer.controller.js"
import { placementOfficerService } from "../services/placementOfficer.service.js"

const route = express.Router()

route.post("/", verifyToken, verifyPlacementOfficer, PlacementOfficerController.createInternship)
route.get("/", verifyToken, verifyPlacementOfficer, PlacementOfficerController.getAllPostedInternship)
route.get("/internship",verifyToken, verifyPlacementOfficer,PlacementOfficerController.getDetailsOfPostedInternship)
route.delete("/", verifyToken, verifyPlacementOfficer, PlacementOfficerController.deleteInternship)
route.put("/",verifyToken,verifyPlacementOfficer,PlacementOfficerController.updateInternship)
export default route          