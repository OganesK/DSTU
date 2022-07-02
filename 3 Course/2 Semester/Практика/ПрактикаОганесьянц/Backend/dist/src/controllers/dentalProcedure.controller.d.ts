import { FastifyReply, FastifyRequest } from 'fastify';
export declare const createOneProcedureController: (req: FastifyRequest<{
    Body: CreateOneDentalProcedure;
    Headers: createOneProcedureHeaders;
}>, reply: FastifyReply) => Promise<void>;
export declare const getAllProceduresController: (req: FastifyRequest<{
    Headers: createOneProcedureHeaders;
}>, reply: FastifyReply) => Promise<void>;
interface CreateOneDentalProcedure {
    name: string;
    price: number;
}
interface createOneProcedureHeaders {
    token: string;
}
export {};
