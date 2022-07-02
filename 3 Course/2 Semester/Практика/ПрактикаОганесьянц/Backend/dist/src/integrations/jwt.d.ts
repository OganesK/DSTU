import { User } from '@prisma/client';
export declare const createToken: (user: User) => string;
export declare const createRefreshToken: (user: User) => any;
export declare const verifyToken: (token: string) => Promise<boolean>;
