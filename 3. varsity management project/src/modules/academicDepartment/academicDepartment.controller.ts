import { PAGINATION_FIELDS } from '../../constants/pagination';
import { catchAsync } from '../../shared/catchAsync';
import pick from '../../shared/pick';
import { sendResponse } from '../../shared/sendResponse';
import { ACADEMIC_DEPARTMENT_FILTERABLE } from './academicDepartment.constant';
import { AcademicDepartmentService } from './academicDepartment.service';

const createDepartment = catchAsync(async (req, res) => {
  const academicDepartmentData = req.body;

  const result = await AcademicDepartmentService.createDepartment(
    academicDepartmentData
  );

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Academic department created successfully!',
    data: result,
  });
});

const getAllDepartments = catchAsync(async (req, res) => {
  const filter = pick(req.query, ACADEMIC_DEPARTMENT_FILTERABLE);
  const paginationOptions = pick(req.query, PAGINATION_FIELDS);

  const result = await AcademicDepartmentService.getAllDepartments(
    filter,
    paginationOptions
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic departments retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AcademicDepartmentService.getSingleDepartment(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic department retrieved successfully!',
    data: result,
  });
});

const updateDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await AcademicDepartmentService.updateDepartment(
    id,
    updatedData
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic department updated successfully!',
    data: result,
  });
});

const deleteDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AcademicDepartmentService.deleteDepartment(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic department deleted successfully!',
    data: result,
  });
});

export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
};
