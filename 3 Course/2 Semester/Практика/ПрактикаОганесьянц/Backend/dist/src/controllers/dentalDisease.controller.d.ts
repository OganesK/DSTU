import { FastifyReply, FastifyRequest } from 'fastify';
export declare const createOneDiseaseController: (req: FastifyRequest<{
    Body: createOneDiseaseBody;
    Headers: createOneDiseaseHeaders;
}>, reply: FastifyReply) => Promise<void>;
export declare const getAllDentalDiseasesController: (req: FastifyRequest<{
    Headers: createOneDiseaseHeaders;
}>, reply: FastifyReply) => Promise<void>;
interface createOneDiseaseHeaders {
    token: string;
}
interface createOneDiseaseBody {
    name: string;
}
export {};
