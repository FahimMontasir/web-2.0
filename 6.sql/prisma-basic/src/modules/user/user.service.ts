import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExits = await prisma.profile.findUnique({
    where: { userId: data.userId },
  });
  if (isExits) {
    const result = await prisma.profile.update({
      where: { userId: data.userId },
      data: { bio: data.bio },
    });
    return result;
  }

  const result = prisma.profile.create({ data });
  return result;
};

const getUsers = async () => {
  const result = await prisma.user.findMany({
    // select: {
    //   name: true
    // }

    //populate
    include: {
      profile: true,
    },
  });
  return result;
};

export const UserService = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsers,
};
