import mongoose from 'mongoose';
import { TErrorResource } from '../interface/Error.interface';

export const handelValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSource: TErrorResource = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );
  return { message: 'Validation error', errorSource };
};
