import { adminFilterableFields } from './admin.constant';
import { IAdmin } from './admin.interface';
import { AdminService } from './admin.service';
import { catchAsync } from '../../shared/catchAsync';
import pick from '../../shared/pick';
import { PAGINATION_FIELDS } from '../../constants/pagination';
import { sendResponse } from '../../shared/sendResponse';

const getAllAdmins = catchAsync(async (req, res) => {
  const filters = pick(req.query, adminFilterableFields);
  const paginationOptions = pick(req.query, PAGINATION_FIELDS);

  const result = await AdminService.getAllAdmins(filters, paginationOptions);

  sendResponse<IAdmin[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Admins retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleAdmin = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await AdminService.getSingleAdmin(id);

  sendResponse<IAdmin>(res, {
    statusCode: 200,
    success: true,
    message: 'Admin retrieved successfully !',
    data: result,
  });
});

const updateAdmin = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await AdminService.updateAdmin(id, updatedData);

  sendResponse<IAdmin>(res, {
    statusCode: 200,
    success: true,
    message: 'Admin updated successfully !',
    data: result,
  });
});

const deleteAdmin = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await AdminService.deleteAdmin(id);

  sendResponse<IAdmin>(res, {
    statusCode: 200,
    success: true,
    message: 'Admin deleted successfully !',
    data: result,
  });
});

export const AdminController = {
  getAllAdmins,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
};
