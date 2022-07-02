import { FastifyReply, FastifyRequest } from 'fastify';
import MedicalRecordAPI from '../datasources/MedicalRecord.api';

export const createOneMedicalController = async (req: FastifyRequest<{
  Body: createOneMedicalRecordBody,
  Headers: { token: string }
}>, reply: FastifyReply) => {
  const medicalRecord = await MedicalRecordAPI.createOneMedicalRecord({
    dentistId: req.body.dentistId,
    medicalDiseaseNames: req.body.medicalDiseaseNames,
    medicalProcedureNames: req.body.medicalProcedureNames,
    userId: req.body.userId,
    token: req.headers.token,
  });

  reply.send(medicalRecord);
};

export const getAllMedicalRecordsController = async (req: FastifyRequest<{
  Body: {},
  Headers: { token: string }
}>, reply: FastifyReply) => {
  const medicalRecords = await MedicalRecordAPI.getAllMedicalRecords(req.headers.token);

  reply.send(medicalRecords);
};

interface createOneMedicalRecordBody {
  dentistId: string
  userId: string
  medicalProcedureNames: string[]
  medicalDiseaseNames: string[]
};
