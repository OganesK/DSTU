import { FastifyInstance } from 'fastify';

import { base as BaseController } from '../controllers/base.controller';

const base = (fastify: FastifyInstance, opts: any, next: (err?: Error) => void) => {
  fastify.get('/', BaseController);

  next();
};

export default base;
