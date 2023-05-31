import express from "express";
import getBlog from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getBlog);

export default router;
