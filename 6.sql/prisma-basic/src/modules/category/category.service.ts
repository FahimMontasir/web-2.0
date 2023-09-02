import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertToDB = async (data: Category): Promise<Category> => {
  const result = prisma.category.create({ data });
  return result;
};

export const CategoryService = {
  insertToDB,
};
