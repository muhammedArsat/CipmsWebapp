import express from 'express'
import { verifyMentor, verifyToken } from '../middlewares/jwt.middleware.js'
import { MentorController } from '../controllers/mentor.controller.js'

const route = express.Router()


route.get("/:id", verifyToken, verifyMentor, MentorController.fetchAllApplications)
route.put("/:id/:mentorId",verifyToken,verifyMentor,MentorController.updateApplication)


export default route