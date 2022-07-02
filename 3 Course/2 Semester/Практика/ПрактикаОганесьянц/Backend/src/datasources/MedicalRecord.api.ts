import { medicalRecord } from '@prisma/client';
import prisma from '../prisma-client';
import { verifyToken } from '../integrations/jwt';

class MedicalRecordAPI {
  public static async createOneMedicalRecord ({ token, userId, medicalDiseaseNames, medicalProcedureNames, dentistId }: createOneMedicalRecordArgs): Promise<medicalRecord> {
    const verifiedToken = await verifyToken(token);

    if (!verifiedToken) {
      throw new Error('Not authorized.');
    }

    const existingProcedures = await prisma.dentalProcedure.findMany({
      where: {
        name: {
          in: medicalProcedureNames,
        },
      },
    });
    const existingDiseases = await prisma.dentalDisease.findMany({
      where: {
        name: {
          in: medicalDiseaseNames,
        },
      },
    });

    if (!existingDiseases || !existingProcedures) {
      throw new Error('Provided disease or procedure does not exist in current database.');
    }

    const totalPrice = existingProcedures.reduce((acc, procedure) => {
      return acc + procedure.price;
    }, 0);

    const record = await prisma.medicalRecord.create({
      data: {
        patient: {
          connect: {
            id: userId,
          },
        },
        procedures: {
          connect: existingProcedures.map((procedure) => {
            return { id: procedure.id };
          }),
        },
        diseases: {
          connect: existingDiseases.map((disease) => {
            return { id: disease.id };
          }),
        },
        dentist: {
          connect: {
            id: dentistId,
          },
        },
        date: new Date(),
        totalPrice,
      },
    });

    if (!record) {
      throw new Error('An error occured.');
    }
    return record;
  }

  public static async getAllMedicalRecords (token: string) {
    const verifiedToken = await verifyToken(token);

    if (!verifiedToken) {
      throw new Error('Not authorized.');
    }

    return prisma.medicalRecord.findMany({
      include: {
        patient: true,
        procedures: true,
        dentist: true,
        diseases: true,
      },
    });
  }
}

interface createOneMedicalRecordArgs {
  dentistId: string
  userId: string
  medicalProcedureNames: string[]
  medicalDiseaseNames: string[]
  token: string
};

export default MedicalRecordAPI;
