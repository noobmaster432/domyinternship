import express from "express";
const app = express();
const port = process.env.PORT || 5000;

import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDb from "./db/connectDb.js";
connectDb();

import { admin } from "./admin/adminJs.js";
import { adminRouter } from "./admin/adminJs.js";

import companyRoutes from "./routes/companyRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import BlogRoutes from "./routes/blogRoutes.js";

app.use(
  cors({
    origin: ["http://localhost:5173", "https://internshipgate.vercel.app"],
  })
);

app.use(express.json());
app.use(admin.options.rootPath, adminRouter);

app.use("/api/company", companyRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/story", storyRoutes);
app.use("/api/blog", BlogRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
