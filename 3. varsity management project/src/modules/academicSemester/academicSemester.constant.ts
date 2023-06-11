import { AcademicTitleCodeMapper } from './academicSemester.interface';

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const ACADEMIC_TITLE = ['Autumn', 'Summer', 'Fall'] as const;

export const ACADEMIC_CODE = ['01', '02', '03'] as const;

export const ACADEMIC_TITLE_CODE_MAPPER: AcademicTitleCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
} as const;

export const ACADEMIC_SEMESTER_SEARCHABLE = ['title', 'code', 'year'] as const;

export const ACADEMIC_SEMESTER_FILTERABLE = [
  'searchTerm',
  'title',
  'code',
  'year',
];
