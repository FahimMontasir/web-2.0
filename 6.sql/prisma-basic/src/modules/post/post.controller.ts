import { Request, Response } from "express";
import { PostService } from "./post.service";

const insertToDB = async (req: Request, res: Response) => {
  try {
    const result = await PostService.insertToDB(req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  const options = req.query;

  try {
    const result = await PostService.getAllPosts(options);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  insertToDB,
  getAllPosts,
};
