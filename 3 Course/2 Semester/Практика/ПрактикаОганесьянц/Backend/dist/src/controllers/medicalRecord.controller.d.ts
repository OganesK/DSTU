import { FastifyReply, FastifyRequest } from 'fastify';
export declare const createOneMedicalController: (req: FastifyRequest<{
    Body: createOneMedicalRecordBody;
    Headers: {
        token: string;
    };
}>, reply: FastifyReply) => Promise<void>;
export declare const getAllMedicalRecordsController: (req: FastifyRequest<{
    Body: {};
    Headers: {
        token: string;
    };
}>, reply: FastifyReply) => Promise<void>;
interface createOneMedicalRecordBody {
    dentistId: string;
    userId: string;
    medicalProcedureNames: string[];
    medicalDiseaseNames: string[];
}
export {};
