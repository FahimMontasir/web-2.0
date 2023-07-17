import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { AcademicFacultyValidations } from './academicFaculty.validations';
import { AcademicFacultyController } from './academicFaculty.controller';
import { USER_ROLE } from '../../enums/user';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicFacultyValidations.createFacultyZodSchema),
  auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN),
  AcademicFacultyController.createFaculty
);

router.get(
  '/:id',
  auth(
    USER_ROLE.SUPER_ADMIN,
    USER_ROLE.ADMIN,
    USER_ROLE.FACULTY,
    USER_ROLE.STUDENT
  ),
  AcademicFacultyController.getSingleFaculty
);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidations.updateFacultyZodSchema),
  auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN),
  AcademicFacultyController.updateFaculty
);

router.delete(
  '/:id',
  auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN),
  AcademicFacultyController.deleteFaculty
);

router.get(
  '/',
  auth(
    USER_ROLE.SUPER_ADMIN,
    USER_ROLE.ADMIN,
    USER_ROLE.FACULTY,
    USER_ROLE.STUDENT
  ),
  AcademicFacultyController.getAllFaculty
);

export const AcademicFacultyRoutes = router;
