import { dentalProcedure } from '@prisma/client';
import { verifyToken } from '../integrations/jwt';
import prisma from '../prisma-client';

class DentalProcedureAPI {
  public static async createDentalProcedure ({ name, token, price }: createDentalProcedureArgs): Promise<dentalProcedure> {
    const existingProcedure = await prisma.dentalProcedure.findUnique({
      where: {
        name,
      },
    });

    if (existingProcedure) {
      throw new Error('Dental procedure with provided name already exist.');
    }

    const verifiedToken = await verifyToken(token);

    if (!verifiedToken) {
      throw new Error('Not authorized.');
    }

    const procedure = await prisma.dentalProcedure.create({
      data: {
        name,
        price,
      },
    });

    if (!procedure) {
      throw new Error('An error occured.');
    }

    return procedure;
  }

  public static async getAllDentalDiseases (userToken: string): Promise<dentalProcedure[]> {
    const verifiedToken = await verifyToken(userToken);

    if (!verifiedToken) {
      throw new Error('Not authorized!');
    }

    return prisma.dentalProcedure.findMany({});
  }
};

interface createDentalProcedureArgs {
  name: string
  price: number
  token: string
}

export default DentalProcedureAPI;
