import { dentalDisease } from '@prisma/client';
declare class DentalDiseaseAPI {
    static CreateDentalDisease({ name, token }: CreateDentalDiseaseArgs): Promise<dentalDisease>;
    static getAllDentalDiseases(userToken: string): Promise<dentalDisease[]>;
}
interface CreateDentalDiseaseArgs {
    name: string;
    token: string;
}
export default DentalDiseaseAPI;
