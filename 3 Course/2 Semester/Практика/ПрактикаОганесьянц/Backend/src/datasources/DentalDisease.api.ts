import { dentalDisease } from '@prisma/client';
import { verifyToken } from '../integrations/jwt';
import prisma from '../prisma-client';

class DentalDiseaseAPI {
  public static async CreateDentalDisease ({ name, token }: CreateDentalDiseaseArgs): Promise<dentalDisease> {
    const existingDisease = await prisma.dentalDisease.findUnique({
      where: {
        name,
      },
    });
    const verifiedToken = await verifyToken(token);

    if (!verifiedToken) {
      throw new Error('Not authorized!');
    }

    if (existingDisease) {
      throw new Error('Disease with provided name already exists.');
    }

    const disease = await prisma.dentalDisease.create({
      data: {
        name,
      },
    });

    if (!disease) {
      throw new Error('An error occured');
    }

    return disease;
  }

  public static async getAllDentalDiseases (userToken: string): Promise<dentalDisease[]> {
    const verifiedToken = await verifyToken(userToken);

    if (!verifiedToken) {
      throw new Error('Not authorized!');
    }

    return prisma.dentalDisease.findMany({});
  }
}

interface CreateDentalDiseaseArgs {
  name: string
  token: string
};

export default DentalDiseaseAPI;
