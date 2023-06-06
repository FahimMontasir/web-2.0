import { Model } from 'mongoose';

export type IUser = {
  id: string;
  role: string;
  password: string;
};

export type IUserModel = Model<IUser, Record<string, unknown>>;
