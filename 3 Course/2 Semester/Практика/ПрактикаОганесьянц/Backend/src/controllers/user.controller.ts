import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { userRole } from '@prisma/client';
import bcrypt from 'bcrypt';
import prisma from '../prisma-client';
import { HASH_SALT } from '../config';
import { createToken } from '../integrations/jwt';

class UserController {
  public static async signUp (req: FastifyRequest<{
    Body: signUpArgs
  }>, reply: FastifyReply) {
    const existingUser = await prisma.user.findUnique({
      where: {
        login: req.body.login,
      },
    });

    if (existingUser) {
      throw new Error('User with provided login is already exist.');
    }

    const hashedPassword = await bcrypt.hash(req.body.password, HASH_SALT);

    const user = await prisma.user.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        role: req.body.role,
        login: req.body.login,
        age: req.body.age,
      },
    });
    const token = createToken(user);

    reply.send({ token });
  }

  public static async signIn (req: FastifyRequest<{
    Body: signInArgs
  }>, reply: FastifyReply) {
    const user = await prisma.user.findUnique({
      where: {
        login: req.body.login,
      },
    });

    if (!user) {
      throw new Error('Incorrect login or password');
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect password.');
    }

    const token = createToken(user);

    reply.send({ token });
  }
}

interface signUpArgs {
  login: string,
  firstName: string,
  lastName: string,
  password: string
  role?: userRole
  age: number
}
interface signInArgs {
  login: string,
  password: string
}

export { UserController };
