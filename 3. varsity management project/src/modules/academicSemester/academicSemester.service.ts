import ApiError from '../../errors/ApiError';
import { paginationHelpers } from '../../helpers/paginationHelper';
import {
  IGenericPaginationResponse,
  IPaginationOptions,
} from '../../interfaces/common';
import {
  ACADEMIC_SEMESTER_SEARCHABLE,
  ACADEMIC_TITLE_CODE_MAPPER,
} from './academicSemester.constant';
import {
  IAcademicSemester,
  IAcademicSemesterFilters,
} from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (ACADEMIC_TITLE_CODE_MAPPER[payload.title] !== payload.code) {
    throw new ApiError(400, 'Invalid semester code.');
  }

  const result = await AcademicSemesterModel.create(payload);

  return result;
};

const getAllSemester = async (
  filters: IAcademicSemesterFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericPaginationResponse<IAcademicSemester[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: ACADEMIC_SEMESTER_SEARCHABLE.map(field => ({
        [field]:
          field === 'year'
            ? Number(searchTerm)
              ? searchTerm
              : null
            : {
                $regex: searchTerm,
                $options: 'i',
              },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortCondition: { [key: string]: 'asc' | 'desc' } = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await AcademicSemesterModel.find(whereConditions)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await AcademicSemesterModel.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleSemester = async (
  id: string
): Promise<IAcademicSemester | null> => {
  const result = await AcademicSemesterModel.findById(id);
  return result;
};

const updateSemester = async (
  id: string,
  payload: Partial<IAcademicSemester>
): Promise<IAcademicSemester | null> => {
  if (
    payload.title &&
    payload.code &&
    ACADEMIC_TITLE_CODE_MAPPER[payload.title] !== payload.code
  ) {
    throw new ApiError(400, 'Invalid semester code.');
  }

  const result = await AcademicSemesterModel.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true }
  );
  return result;
};

const deleteSemester = async (
  id: string
): Promise<IAcademicSemester | null> => {
  const result = await AcademicSemesterModel.findByIdAndDelete(id);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};
