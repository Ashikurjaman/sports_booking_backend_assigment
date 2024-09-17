import { Types } from 'mongoose';

export type TBookingStatus = 'confirmed' | 'unconfirmed' | 'canceled';

export type TBooking = {
  date: Date;
  startTime: Date;
  endTime: Date;
  user: Types.ObjectId;
  facility: Types.ObjectId;
  payableAmount: number;
  isBooked: TBookingStatus;
};
