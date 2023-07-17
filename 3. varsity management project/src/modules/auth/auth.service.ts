import { Secret } from 'jsonwebtoken';
import ApiError from '../../errors/ApiError';
import User from '../user/user.model';
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import config from '../../config';
import { JwtHelpers } from '../../helpers/jwtHelpers';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { id, password } = payload;

  // const user = new User();
  const isUserExist = await User.isUserExist(id);
  if (!isUserExist) {
    throw new ApiError(404, 'User does not exist');
  }
  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(401, 'Password is incorrect.');
  }

  //create access token & refresh token
  const { id: userId, role, needsPasswordChange } = isUserExist;
  const accessToken = JwtHelpers.createToken(
    { id: userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = JwtHelpers.createToken(
    { id: userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  // verify token
  let verifiedToken;
  try {
    verifiedToken = JwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (error) {
    throw new ApiError(401, 'Invalid refresh token');
  }

  const { id } = verifiedToken;
  //checking deleted user refresh token
  const isUserExist = await User.isUserExist(id);
  if (!isUserExist) {
    throw new ApiError(404, 'User does not exits');
  }

  //generate new token
  const newAccessToken = JwtHelpers.createToken(
    { id: isUserExist.id, role: isUserExist.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = {
  loginUser,
  refreshToken,
};
