import mongoose from 'mongoose';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { AcademicSemesterModel } from '../academicSemester/academicSemester.model';
import { IStudent } from '../student/student.interface';
import { IUser } from './user.interface';
import User from './user.model';
import { generateStudentID } from './user.utils';
import { Student } from '../student/student.model';

const createStudent = async (
  student: IStudent,
  user: IUser
): Promise<IUser | null> => {
  //default pass
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  //set role
  user.role = 'student';

  const academicSemester = await AcademicSemesterModel.findById(
    student.academicSemester
  );

  let newUserAllData;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // generate student id
    const id = await generateStudentID(academicSemester);
    user.id = id;
    student.id = id;

    const createdStudent = await Student.create([student], [session]);

    if (!createdStudent.length) {
      throw new ApiError(400, 'Failed to create student');
    }

    //set student -> _id into user.student
    user.student = createdStudent[0]._id;
    const newUser = await User.create([user], [session]);

    if (!newUser.length) {
      throw new ApiError(400, 'Failed to create user');
    }
    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  // user -> student -> academicSemester, academicDepartment, academicFaculty
  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'student',
      populate: [
        { path: 'academicSemester' },
        { path: 'academicDepartment' },
        { path: 'academicFaculty' },
      ],
    });
  }

  return newUserAllData;
};

export const UserService = {
  createStudent,
};
