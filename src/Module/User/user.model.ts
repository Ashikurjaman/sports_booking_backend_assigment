import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcryptjs from 'bcryptjs';

const sportsUserSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    phone: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
sportsUserSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcryptjs.hash(user.password, Number(8));

  next();
});
sportsUserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('SportsUser', sportsUserSchema);
