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

const updateAcademicSemesterZodSchema = z
  .object({
    body: z.object({
      title: z.enum(ACADEMIC_TITLE).optional(),
      year: z.number().optional(),
      code: z.enum(ACADEMIC_CODE).optional(),
      startMonth: z.enum(MONTHS).optional(),
      endMonth: z.enum(MONTHS).optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    { message: 'Either both title and code should be provided or neither' }
  );

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
};
