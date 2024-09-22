import { TBooking } from './booking.interface';
import { Booking } from './booking.model';

const createBooking = async (payload: TBooking) => {
  const result = Booking.create(payload);
};
