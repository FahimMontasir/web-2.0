import { AcademicSemesterService } from './academicSemester.service';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';
import pick from '../../shared/pick';
import { PAGINATION_FIELDS } from '../../constants/pagination';
import { IAcademicSemester } from './academicSemester.interface';
import { ACADEMIC_SEMESTER_FILTERABLE } from './academicSemester.constant';

const createSemester = catchAsync(async (req, res) => {
  const academicSemesterData = req.body;
  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  );

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Academic semester created successfully!',
    data: result,
  });
});

const getAllSemester = catchAsync(async (req, res) => {
  const filters = pick(req.query, ACADEMIC_SEMESTER_FILTERABLE);
  const paginationOptions = pick(req.query, PAGINATION_FIELDS);

  const result = await AcademicSemesterService.getAllSemester(
    filters,
    paginationOptions
  );

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Semesters retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleSemester = catchAsync(async (req, res) => {
  const id = req.params?.id;
  const result = await AcademicSemesterService.getSingleSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Semester retrieved successfully',
    data: result,
  });
});

const updateSemester = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await AcademicSemesterService.updateSemester(id, updatedData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Semester updated successfully',
    data: result,
  });
});

const deleteSemester = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await AcademicSemesterService.deleteSemester(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Semester deleted successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};
