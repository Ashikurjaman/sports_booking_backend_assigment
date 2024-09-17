import { Request } from 'express';
import { NextFunction, Response } from 'express-serve-static-core';
import { AuthService } from './user.service';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const result = await AuthService.register(req.body);

  res.status(200).json({
    success: true,
    message: 'Registration successfully',
    data: result,
  });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { accessToken, refreshToken } = await AuthService.login(req.body);
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    status: 200,
    message: 'Login  successfully',
    token: accessToken,
    data: {
      accessToken,
    },
  });
};

export const UserController = {
  signUp,
  login,
};
