import { ZodError } from 'zod';
import { handelCastError } from '../error/HandelCastError';
import { handelDuplicateError } from '../error/HandelDuplicateError';
import { handelValidationError } from '../error/HandelValidationError';
import { handelZodError } from '../error/HandleZodError';
import { TErrorResource } from '../interface/Error.interface';
import AppError from '../error/App.error';
import { ErrorRequestHandler } from 'express';

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let statusCode = 500;
  let message = 'something went wrong';

  let errorResources: TErrorResource = [
    {
      path: '',
      message: 'something went wrong',
    },
  ];
  if (err.name === 'ValidationError') {
    const simplified = handelValidationError(err);
    errorResources = simplified.errorSource;
  } else if (err.name === 'CastError') {
    const simplified = handelCastError(err);
    errorResources = simplified.errorResource;
  } else if (err.code === 11000) {
    const simplified = handelDuplicateError(err);
    errorResources = simplified.errorSource;
  } else if (err instanceof ZodError) {
    const simplified = handelZodError(err);
    errorResources = simplified.errorSource;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    // message = err.message;
    errorResources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }
  res.status(statusCode).json({
    success: false,
    message: err.name,
    errorResources,
    err,
  });
};
