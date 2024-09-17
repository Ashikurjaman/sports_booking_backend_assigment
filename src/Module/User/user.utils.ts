import bcryptjs from 'bcryptjs';

export const isPasswordMatch = async (
  plainPassword: string,
  hashPassword: string,
): Promise<boolean> => {
  const isMatch = bcryptjs.compare(plainPassword, hashPassword);
  return isMatch;
};
