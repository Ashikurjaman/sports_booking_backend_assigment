import mongoose from 'mongoose';
import { TErrorResource } from '../interface/Error.interface';

export const handelCastError = (err: mongoose.Error.CastError) => {
  const errorResource: TErrorResource = [
    {
      path: err.path,
      message: err.message,
    },
  ];
  return {
    message: 'CastError',
    errorResource,
  };
};
