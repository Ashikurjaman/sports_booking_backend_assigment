import express from 'express';
import { BookingsController } from './booking.controller';

const router = express.Router();

router.post('/', BookingsController.createBooking);

export const bookingRoutes = router;
