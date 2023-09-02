import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const insertToDB = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.insertToDB(req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = {
  insertToDB,
};
