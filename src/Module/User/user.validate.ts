import { z } from 'zod';

const UserZodValidation = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
  phone: z.string().min(10, { message: 'Phone number is required' }),
  role: z.enum(['admin', 'user']),
  address: z.string().min(1, { message: 'Address is required' }),
});

export const validateUserFromZod = {
  UserZodValidation,
};
