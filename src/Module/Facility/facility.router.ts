import express from 'express';
import { facilityController } from './facility.controller';

const router = express.Router();

router.post('/', facilityController.createFacility);
router.get('/', facilityController.getAllFacility);
router.delete('/:id', facilityController.deleteFacility);
router.put('/:id', facilityController.updateFacility);

export const facilityRoute = router;
