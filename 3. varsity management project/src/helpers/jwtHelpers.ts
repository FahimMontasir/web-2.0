import jwt, { Secret } from 'jsonwebtoken';
import { IUser } from '../modules/user/user.interface';
import { IDecodedUser } from '../interfaces/common';

const createToken = (
  payload: Pick<IUser, 'id' | 'role'>,
  secret: Secret,
  expireTime: string
) => {
  return jwt.sign(payload, secret, { expiresIn: expireTime });
};

const verifyToken = (token: string, secret: Secret): IDecodedUser => {
  return jwt.verify(token, secret) as IDecodedUser;
};

export const JwtHelpers = {
  createToken,
  verifyToken,
};
