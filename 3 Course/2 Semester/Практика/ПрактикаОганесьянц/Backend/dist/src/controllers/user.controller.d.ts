import { FastifyReply, FastifyRequest } from 'fastify';
import { userRole } from '@prisma/client';
declare class UserController {
    static signUp(req: FastifyRequest<{
        Body: signUpArgs;
    }>, reply: FastifyReply): Promise<void>;
    static signIn(req: FastifyRequest<{
        Body: signInArgs;
    }>, reply: FastifyReply): Promise<void>;
}
interface signUpArgs {
    login: string;
    firstName: string;
    lastName: string;
    password: string;
    role?: userRole;
    age: number;
}
interface signInArgs {
    login: string;
    password: string;
}
export { UserController };
