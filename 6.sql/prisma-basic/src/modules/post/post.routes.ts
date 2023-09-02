import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.insertToDB);
router.get("/all-posts", PostController.insertToDB);

export const PostRoutes = router;
