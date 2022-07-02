import { FastifyReply, FastifyRequest } from 'fastify';

import { version } from '../../package.json';

const base = (req: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: `Dental clinic crm, ver ${version}` });
};

export { base };
