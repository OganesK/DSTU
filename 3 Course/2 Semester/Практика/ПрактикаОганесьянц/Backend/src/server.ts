import fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';

import { PORT, JWT_SECRET } from './config';
import { logger } from './logger';
import baseRoute from './routes/base.routes';
import { userRoutes } from './routes/user.routes';
import { dentalDiseaeRoutes } from './routes/dentalDisease.routes';
import { dentalProcedureRoutes } from './routes/dentalProcedure.routes';
import { medicalRecordRoutes } from './routes/medicalRecord.routes';

const whitelist = [
  'http://localhost:5000',
  'http://localhost:4000',
  'http://localhost:3000',
];

const server = fastify();

server.register(fastifySwagger, {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Dental-clinit restAPI',
      description: 'Documentation',
      version: '1.0.0',
    },
    host: 'localhost',
    schemes: ['https', 'http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'apiKey',
        in: 'header',
      },
    },
    security: [{
      apiKey: [],
    }],
  },
  exposeRoute: true,
});

server.register(baseRoute);

server.register(userRoutes, { prefix: 'user' });
server.register(dentalDiseaeRoutes, { prefix: 'dentalDisease' });
server.register(dentalProcedureRoutes, { prefix: 'dentalProcedure' });
server.register(medicalRecordRoutes, { prefix: 'medicalRecord' });

const restServer = () => {
  server.listen(PORT, '0.0.0.0', () => {
    logger.info(`Server started at http://0.0.0.0:${PORT}`);
  });
};

export {
  restServer,
};
