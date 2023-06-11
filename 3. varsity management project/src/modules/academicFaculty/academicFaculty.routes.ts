import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidations } from './academicFaculty.validations';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicFacultyValidations.createFacultyZodSchema),
  AcademicFacultyController.createFaculty
);

router.get('/:id', AcademicFacultyController.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidations.updateFacultyZodSchema),
  AcademicFacultyController.updateFaculty
);

router.delete('/:id', AcademicFacultyController.deleteFaculty);

router.get('/', AcademicFacultyController.getAllFaculty);

export const AcademicFacultyRoutes = router;
