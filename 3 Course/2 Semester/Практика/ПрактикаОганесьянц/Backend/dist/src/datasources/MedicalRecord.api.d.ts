import { medicalRecord } from '@prisma/client';
declare class MedicalRecordAPI {
    static createOneMedicalRecord({ token, userId, medicalDiseaseNames, medicalProcedureNames, dentistId }: createOneMedicalRecordArgs): Promise<medicalRecord>;
    static getAllMedicalRecords(token: string): Promise<(medicalRecord & {
        dentist: import(".prisma/client").User;
        diseases: import(".prisma/client").dentalDisease[];
        procedures: import(".prisma/client").dentalProcedure[];
        patient: import(".prisma/client").User;
    })[]>;
}
interface createOneMedicalRecordArgs {
    dentistId: string;
    userId: string;
    medicalProcedureNames: string[];
    medicalDiseaseNames: string[];
    token: string;
}
export default MedicalRecordAPI;
