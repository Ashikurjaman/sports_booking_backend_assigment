import { ZodError } from 'zod';
import { TErrorResource } from '../interface/Error.interface';

export const handelZodError = (err: ZodError) => {
  const errorSource: TErrorResource = err.issues.map(error => {
    return {
      path: error.path[error.path.length - 1],
      message: error.message,
    };
  });
  return {
    message: 'Zod Error',
    errorSource,
  };
};
