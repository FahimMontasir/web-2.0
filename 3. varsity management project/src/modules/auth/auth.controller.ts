import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';

const loginUser = catchAsync(async (req, res) => {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Use',
  });
});

export const AuthController = {
  loginUser,
};
