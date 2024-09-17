import config from '../../app/config';
import { TLogin } from '../Auth/auth.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { isPasswordMatch } from './user.utils';
import jwt from 'jsonwebtoken';

const register = async (payload: TUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password');
  if (user) {
    throw new Error('Email Already Exists');
  }
  payload.role = 'user';
  const result = await User.create(payload);
  return result;
};

const login = async (payload: TLogin) => {
  const user = await User.findOne({ email: payload.email }).select('+password');
  if (!user) {
    throw new Error("Email doesn't exists");
  }

  const passwordMatch = await isPasswordMatch(payload.password, user.password);

  if (!passwordMatch) {
    throw new Error('Password not match');
  }
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_token as string, {
    expiresIn: config.jwt_token_access_time,
  });
  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_access_token as string,
    {
      expiresIn: config.jwt_refresh_token_access_time,
    },
  );
  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = {
  register,
  login,
};
