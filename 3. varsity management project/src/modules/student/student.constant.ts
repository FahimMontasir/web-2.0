export const GENDER = ['male', 'female'] as const;

export const BLOOD_GROUP = [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
] as const;

export const STUDENT_SEARCHABLE = [
  'id',
  'email',
  'contactNo',
  'name.firstName',
  'name.middleName',
  'name.lastName',
] as const;

export const STUDENT_FILTERABLE = [
  'searchTerm',
  'id',
  'bloodGroup',
  'email',
  'contactNo',
  'emergencyContactNo',
] as const;
