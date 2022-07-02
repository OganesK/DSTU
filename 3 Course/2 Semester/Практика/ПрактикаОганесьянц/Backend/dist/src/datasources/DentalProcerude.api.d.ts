import { dentalProcedure } from '@prisma/client';
declare class DentalProcedureAPI {
    static createDentalProcedure({ name, token, price }: createDentalProcedureArgs): Promise<dentalProcedure>;
    static getAllDentalDiseases(userToken: string): Promise<dentalProcedure[]>;
}
interface createDentalProcedureArgs {
    name: string;
    price: number;
    token: string;
}
export default DentalProcedureAPI;
