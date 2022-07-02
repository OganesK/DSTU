import { FastifyInstance } from 'fastify';
import { createOneDentalDiseaseSchema } from '../schemas/dentalDisease.schema';
import { createOneDiseaseController, getAllDentalDiseasesController } from '../controllers/dentalDisease.controller';

export const dentalDiseaeRoutes = (fastify: FastifyInstance, opts: any, next: (err?: Error) => void) => {
  fastify.post('/createOneDentalDisease', {
    schema: createOneDentalDiseaseSchema,
    handler: createOneDiseaseController,
  });

  fastify.get('/getAllDentalDiseases', {
    schema: {
      headers: {
        token: { type: 'string' },
      },
    },
    handler: getAllDentalDiseasesController,
  });

  next();
};
