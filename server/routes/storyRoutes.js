import express from "express";
import getStory from "../controllers/storyController.js";

const router = express.Router();

router.get("/", getStory);

export default router;
