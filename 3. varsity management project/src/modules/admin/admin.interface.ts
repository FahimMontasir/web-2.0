import { Model, Types } from 'mongoose';
import { IManagementDepartment } from '../managementDepartment/managementDepartment.interface';
import { BLOOD_GROUP, GENDER } from '../student/student.constant';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IAdmin = {
  id: string;
  name: UserName;
  profileImage: string;
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  gender?: (typeof GENDER)[number];
  permanentAddress?: string;
  presentAddress?: string;
  bloodGroup?: (typeof BLOOD_GROUP)[number];

  managementDepartment: Types.ObjectId | IManagementDepartment;
  designation: string;
};

export type AdminModel = Model<IAdmin, Record<string, unknown>>;

export type IAdminFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
  gender?: (typeof GENDER)[number];
  bloodGroup?: (typeof BLOOD_GROUP)[number];
  managementDepartment?: string;
  designation?: string;
};
