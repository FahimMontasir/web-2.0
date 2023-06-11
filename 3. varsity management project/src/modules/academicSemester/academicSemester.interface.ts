import { Model } from 'mongoose';
import {
  ACADEMIC_CODE,
  ACADEMIC_TITLE,
  MONTHS,
} from './academicSemester.constant';

export type Month = (typeof MONTHS)[number];
export type AcademicTitle = (typeof ACADEMIC_TITLE)[number];
export type AcademicCode = (typeof ACADEMIC_CODE)[number];

export type IAcademicSemester = {
  title: AcademicTitle;
  year: number;
  code: AcademicCode;
  startMonth: Month;
  endMonth: Month;
};

export type IAcademicSemesterModel = Model<
  IAcademicSemester,
  Record<string, unknown>
>;

export type AcademicTitleCodeMapper = {
  [key in AcademicTitle]: AcademicCode;
};

export type IAcademicSemesterFilters = {
  searchTerm?: string;
};
