import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemeterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';
const router = express.Router();

router.get('/', AcademicSemeterController.getAllFromDB);
router.get('/:id', AcademicSemeterController.getDataById);
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemeterController.insertIntoDB
);

export const AcademicSemeterRoutes = router;
