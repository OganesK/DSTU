import { FastifyInstance } from 'fastify';
import { createDentalProcedureSchema, getAllDentalProceduresSchema } from '../schemas/dentalProcedure.schema';
import { createOneProcedureController, getAllProceduresController } from '../controllers/dentalProcedure.controller';

export const dentalProcedureRoutes = (fastify: FastifyInstance, opts: any, next: (err?: Error) => void) => {
  fastify.post('/createOneDentalProcedure', {
    schema: createDentalProcedureSchema,
    handler: createOneProcedureController,
  });

  fastify.get('/getAllDentalProcedures', {
    schema: getAllDentalProceduresSchema,
    handler: getAllProceduresController,
  });

  next();
};
