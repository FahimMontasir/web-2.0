import { managementDepartmentFilterableFields } from './managementDepartment.constant';
import { ManagementDepartmentService } from './managementDepartment.service';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';
import { IManagementDepartment } from './managementDepartment.interface';
import pick from '../../shared/pick';
import { PAGINATION_FIELDS } from '../../constants/pagination';

const createDepartment = catchAsync(async (req, res) => {
  const { ...departmentData } = req.body;
  const result = await ManagementDepartmentService.createDepartment(
    departmentData
  );

  sendResponse<IManagementDepartment>(res, {
    statusCode: 200,
    success: true,
    message: 'Management department created successfully',
    data: result,
  });
});

const getAllDepartments = catchAsync(async (req, res) => {
  const filters = pick(req.query, managementDepartmentFilterableFields);
  const paginationOptions = pick(req.query, PAGINATION_FIELDS);

  const result = await ManagementDepartmentService.getAllDepartments(
    filters,
    paginationOptions
  );

  sendResponse<IManagementDepartment[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Management departments retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ManagementDepartmentService.getSingleDepartment(id);

  sendResponse<IManagementDepartment>(res, {
    statusCode: 200,
    success: true,
    message: 'Management department retieved successfully',
    data: result,
  });
});

const updateDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await ManagementDepartmentService.updateDepartment(
    id,
    updatedData
  );

  sendResponse<IManagementDepartment>(res, {
    statusCode: 200,
    success: true,
    message: 'Management department updated successfully',
    data: result,
  });
});

const deleteDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ManagementDepartmentService.deleteDepartment(id);

  sendResponse<IManagementDepartment>(res, {
    statusCode: 200,
    success: true,
    message: 'Management department deleted successfully',
    data: result,
  });
});

export const ManagementDepartmentController = {
  createDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
};
