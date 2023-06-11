import { PAGINATION_FIELDS } from '../../constants/pagination';
import { catchAsync } from '../../shared/catchAsync';
import pick from '../../shared/pick';
import { sendResponse } from '../../shared/sendResponse';
import { ACADEMIC_FACULTY_FILTERABLE } from './academicFaculty.constant';
import { AcademicFacultyService } from './academicFaculty.service';

const createFaculty = catchAsync(async (req, res) => {
  const academicFacultyData = req.body;

  const result = await AcademicFacultyService.createFaculty(
    academicFacultyData
  );

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Academic faculty created successfully!',
    data: result,
  });
});

const getAllFaculty = catchAsync(async (req, res) => {
  const filter = pick(req.query, ACADEMIC_FACULTY_FILTERABLE);
  const paginationOptions = pick(req.query, PAGINATION_FIELDS);

  const result = await AcademicFacultyService.getAllFaculty(
    filter,
    paginationOptions
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculties retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AcademicFacultyService.getSingleFaculty(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculty retrieved successfully!',
    data: result,
  });
});

const updateFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await AcademicFacultyService.updateFaculty(id, updatedData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculty updated successfully!',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AcademicFacultyService.deleteFaculty(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculty deleted successfully!',
    data: result,
  });
});

export const AcademicFacultyController = {
  createFaculty,
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
};
