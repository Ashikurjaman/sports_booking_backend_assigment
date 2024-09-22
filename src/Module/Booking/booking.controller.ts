import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../../middleware/catchAync';

const createBooking = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await bookingService.createBooking(data);
  },
);

export const BookingsController = {
  createBooking,
};
