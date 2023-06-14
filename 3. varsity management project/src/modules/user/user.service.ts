import config from '../../config';
import ApiError from '../../errors/ApiError';
import { IUser } from './user.interface';
import User from './user.model';
import { generateStudentID } from './user.utils';

const createStudent = async (user: IUser): Promise<IUser | null> => {
  // we need an incremental id and a default pass
  const id = await generateStudentID({ code: '02', year: 2025 });
  user.id = id;

  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user!');
  }
  return createdUser;
};

export const UserService = {
  createStudent,
};
