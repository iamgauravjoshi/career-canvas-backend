import express from "express";
import { createResume } from "../controllers/resume.controller.js";
// import { verifyToken } from "../middleware/verifyToken.js";
import verifyUser from "../middleware/verifyUser.js";

const router = express.Router();

// Route to create a new resume
router.post("/create", verifyUser, createResume);
// router.post("/get-resume-list", verifyUser, getResumeList);

export default router;
