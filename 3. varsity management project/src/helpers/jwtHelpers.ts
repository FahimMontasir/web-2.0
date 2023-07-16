import jwt, { Secret } from 'jsonwebtoken';
import { IUser } from '../modules/user/user.interface';

const createToken = (
  payload: Pick<IUser, 'id' | 'role'>,
  secret: Secret,
  expireTime: string
) => {
  return jwt.sign(payload, secret, { expiresIn: expireTime });
};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret);
};

export const JwtHelpers = {
  createToken,
  verifyToken,
};
