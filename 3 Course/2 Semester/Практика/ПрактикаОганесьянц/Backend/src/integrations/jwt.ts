import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import { JWT_SECRET } from '../config';

export const createToken = (user: User): string => {
  return jwt.sign({
    userId: user.id,
    iss: 'Issuer',
  }, JWT_SECRET!, {
    algorithm: 'HS256',
  });
};

export const createRefreshToken = (user: User) => {
  return jwt.sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.JWT_REFRESH_SECRET!,
  );
};

export const verifyToken: (token: string) => Promise<boolean> = async (token: string): Promise<boolean> => {
  return jwt.verify(token, 'change me', (err, decoded) => {
    if (err) {
      return false;
    }

    return true;
  });
};
