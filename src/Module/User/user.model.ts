import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const sportsUserSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('SportsUser', sportsUserSchema);
