import { AcademicSemesterService } from './academicSemester.service';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';

const createSemester = catchAsync(async (req, res) => {
  const academicSemesterData = req.body;
  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic semester created successfully!',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
};
