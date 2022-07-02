import prisma from '../prisma-client';

class StatisticAPI {
  public static async getDiseaseStatiscticPerAge () {
    const data = await prisma.medicalRecord.findMany({
      include: {
        patient: true,
        diseases: true,
      },
    });
    const filteredData = data.map((record) => {
      return { age: record.patient.age, diseases: record.diseases.map((disease) => disease.name) };
    });

    console.log(filteredData);
  }
}

export default StatisticAPI;

// StatisticAPI.getDiseaseStatiscticPerAge();
