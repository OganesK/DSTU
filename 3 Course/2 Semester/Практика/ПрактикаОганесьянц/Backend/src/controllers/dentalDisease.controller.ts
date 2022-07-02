import { FastifyReply, FastifyRequest } from 'fastify';
import DentalDiseaseAPI from '../datasources/DentalDisease.api';

export const createOneDiseaseController = async (req: FastifyRequest<{
  Body: createOneDiseaseBody,
  Headers: createOneDiseaseHeaders
}>, reply: FastifyReply) => {
  const dentalDisease = await DentalDiseaseAPI.CreateDentalDisease({ name: req.body.name, token: req.headers.token });

  reply.send(dentalDisease);
};

export const getAllDentalDiseasesController = async (req: FastifyRequest<{
  Headers: createOneDiseaseHeaders
}>, reply: FastifyReply) => {
  const getAllDentalDiseases = await DentalDiseaseAPI.getAllDentalDiseases(req.headers.token);

  reply.send(getAllDentalDiseases);
};

interface createOneDiseaseHeaders {
  token: string
}

interface createOneDiseaseBody {
  name: string
}
