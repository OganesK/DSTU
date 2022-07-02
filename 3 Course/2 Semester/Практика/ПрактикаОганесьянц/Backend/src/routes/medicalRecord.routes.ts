import { FastifyInstance } from 'fastify';
import { createOneMedicalController, getAllMedicalRecordsController } from '../controllers/medicalRecord.controller';
import { createMedicalRecordSchema, getAllMedicalRecordsSchema } from '../schemas/medicalRecord.schema';

export const medicalRecordRoutes = (fastify: FastifyInstance, opts: any, next: (err?: Error) => void) => {
  fastify.post('/createOneMedicalRecord', {
    schema: createMedicalRecordSchema,
    handler: createOneMedicalController,
  });

  fastify.get('/getAllMedicalRecords', {
    schema: getAllMedicalRecordsSchema,
    handler: getAllMedicalRecordsController,
  });

  next();
};
