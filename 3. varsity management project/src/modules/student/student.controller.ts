import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';
import pick from '../../shared/pick';
import { PAGINATION_FIELDS } from '../../constants/pagination';
import { IStudent, IStudentFilters } from './student.interface';
import { STUDENT_FILTERABLE } from './student.constant';
import { StudentService } from './student.service';

const getAllStudent = catchAsync(async (req, res) => {
  const filters = pick(
    req.query,
    STUDENT_FILTERABLE as unknown as string[]
  ) as IStudentFilters;
  const paginationOptions = pick(req.query, PAGINATION_FIELDS);

  const result = await StudentService.getAllStudent(filters, paginationOptions);

  sendResponse<IStudent[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Students retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const id = req.params?.id;
  const result = await StudentService.getSingleStudent(id);

  sendResponse<IStudent>(res, {
    statusCode: 200,
    success: true,
    message: 'Student retrieved successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await StudentService.updateStudent(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student updated successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await StudentService.deleteStudent(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student deleted successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
