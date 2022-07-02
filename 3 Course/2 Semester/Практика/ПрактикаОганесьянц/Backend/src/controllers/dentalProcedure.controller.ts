import { FastifyReply, FastifyRequest } from 'fastify';
import DentalProcedureAPI from '../datasources/DentalProcerude.api';

export const createOneProcedureController = async (req: FastifyRequest<{
  Body: CreateOneDentalProcedure,
  Headers: createOneProcedureHeaders
}>, reply: FastifyReply) => {
  const dentalProcedure = await DentalProcedureAPI.createDentalProcedure({ name: req.body.name, token: req.headers.token, price: req.body.price });

  reply.send(dentalProcedure);
};

export const getAllProceduresController = async (req: FastifyRequest<{
  Headers: createOneProcedureHeaders
}>, reply: FastifyReply) => {
  const allProcedures = await DentalProcedureAPI.getAllDentalDiseases(req.headers.token);

  reply.send(allProcedures);
};

interface CreateOneDentalProcedure {
  name: string
  price: number
}

interface createOneProcedureHeaders {
  token: string
}
