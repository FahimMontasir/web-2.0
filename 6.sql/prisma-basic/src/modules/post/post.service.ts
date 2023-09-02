import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertToDB = async (data: Post): Promise<Post> => {
  const result = prisma.post.create({
    data,
    include: { author: true, category: true },
  });
  return result;
};

const getAllPosts = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;

  const skip = Number(limit) * Number(page) - Number(limit) || 0;
  const take = Number(limit) || 10;

  return await prisma.$transaction(async (tx) => {
    const result = tx.post.findMany({
      skip,
      take,
      include: {
        author: true,
        category: true,
      },
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : { createdAt: "desc" },
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });

    // total post
    const total = await tx.post.count();

    return result;
  });
};

const updatePost = async (id: number, payload: Post) => {
  return prisma.post.update({ where: { id }, data: payload });
};

const deletePost = async (id: number) => {
  return prisma.post.delete({ where: { id } });
};

const aggregateAndGrouping = async (id: number) => {
  // return prisma.post.aggregate({ _avg: { authorId: true } });
  return prisma.post.groupBy({ by: ["title"], _count: { title: true } });
};

const rawSQl = async (payload: Post) => {
  // return prisma.$queryRaw`select * from posts`;
  return prisma.$executeRaw`update posts set title=${payload.title} where id=${payload.id}`;
};

export const PostService = {
  insertToDB,
  getAllPosts,
  updatePost,
  deletePost,
};
