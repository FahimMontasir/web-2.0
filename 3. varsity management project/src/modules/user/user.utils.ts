import User from './user.model';

export const findLastUserId = async () => {
  const lastUserId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUserId?.id;
};

export const generateUserID = async () => {
  const currentId = (await findLastUserId()) || '0';
  return (parseInt(currentId) + 1).toString().padStart(5, '0');
};
