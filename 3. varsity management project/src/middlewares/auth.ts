import { NextFunction, Request, Response } from 'express';
import ApiError from '../errors/ApiError';
import { JwtHelpers } from '../helpers/jwtHelpers';
import config from '../config';
import { Secret } from 'jsonwebtoken';

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) throw new ApiError(403, 'You are not authorized!');

      //verify token
      const verifiedUser = JwtHelpers.verifyToken(
        token,
        config.jwt.secret as Secret
      );

      req.user = verifiedUser;

      // role guard
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(403, 'Forbidden');
      }

      return next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
