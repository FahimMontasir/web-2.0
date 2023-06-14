import { Model, Types } from 'mongoose';
import { GENDER, BLOOD_GROUP } from './student.constant';

export type IStudent = {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender?: (typeof GENDER)[number];
  bloodGroup?: (typeof BLOOD_GROUP)[number];
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
    address: string;
  };
  localGuardian: {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
  };
  profileImage: string;
  academicFaculty: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  academicSemester: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export type StudentModel = Model<IStudent, Record<string, unknown>>;
