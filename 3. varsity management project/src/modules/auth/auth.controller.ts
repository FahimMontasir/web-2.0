import { CookieOptions } from 'express';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';
import { AuthService } from './auth.service';
import config from '../../config';

const loginUser = catchAsync(async (req, res) => {
  const loginData = req.body;
  const result = await AuthService.loginUser(loginData);
  const { refreshToken, ...others } = result;

  //set refresh token into cookie
  const cookieOptions: CookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User logged in successfully!',
    data: others,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;

  const result = await AuthService.refreshToken(refreshToken);

  //set refresh token into cookie
  const cookieOptions: CookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Refresh token received successfully!',
    data: result,
  });
});

export const AuthController = {
  loginUser,
  refreshToken,
};
