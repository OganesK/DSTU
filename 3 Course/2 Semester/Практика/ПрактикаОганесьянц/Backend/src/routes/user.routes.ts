import { FastifyInstance } from 'fastify';
import { signInSchema, signUpSchema } from '../schemas/auth.schema';
import { UserController } from '../controllers/user.controller';

export const userRoutes = (fastify: FastifyInstance, opts: any, next: (err?: Error) => void) => {
  fastify.post('/signUp', { schema: signUpSchema }, UserController.signUp);

  fastify.post('/signIn', { schema: signInSchema, handler: UserController.signIn });

  next();
};
