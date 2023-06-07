import ApiError from '../../errors/ApiError';
import { ACADEMIC_TITLE_CODE_MAPPER } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
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

export const AcademicSemesterService = {
  createSemester,
};
