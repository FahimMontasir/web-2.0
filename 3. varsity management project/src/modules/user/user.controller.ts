import { UserService } from './user.service';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';

const createUser = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await UserService.createUserToDB(user);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
};
