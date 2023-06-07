import { z } from 'zod';
import {
  ACADEMIC_CODE,
  ACADEMIC_TITLE,
  MONTHS,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(ACADEMIC_TITLE, {
      required_error: 'Title is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    code: z.enum(ACADEMIC_CODE, {
      required_error: 'Code is required',
    }),
    startMonth: z.enum(MONTHS, {
      required_error: 'Start month is required',
    }),
    endMonth: z.enum(MONTHS, {
      required_error: 'End month is required',
    }),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
