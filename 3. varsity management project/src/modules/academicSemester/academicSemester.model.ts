import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  IAcademicSemesterModel,
} from './academicSemester.interface';
import {
  ACADEMIC_CODE,
  ACADEMIC_TITLE,
  MONTHS,
} from './academicSemester.constant';
import ApiError from '../../errors/ApiError';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: ACADEMIC_TITLE,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: ACADEMIC_CODE,
    },
    startMonth: {
      type: String,
      required: true,
      enum: MONTHS,
    },
    endMonth: {
      type: String,
      required: true,
      enum: MONTHS,
    },
  },
  { timestamps: true }
);

// pre hook to check if the semester year and title is same
academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemesterModel.findOne({
    title: this.title,
    year: this.year,
  });

  if (isExist) {
    throw new ApiError(409, 'Academic semester is already exist!!!');
  }
  next();
});

export const AcademicSemesterModel = model<
  IAcademicSemester,
  IAcademicSemesterModel
>('AcademicSemester', academicSemesterSchema);
