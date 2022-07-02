import { queryField, nonNull } from 'nexus'

export const MedicalRecordFindUniqueQuery = queryField(
  'findUniqueMedicalRecord',
  {
    type: 'medicalRecord',

    resolve(_parent, { where }, { prisma, select }) {
      return prisma.medicalRecord.findUnique({
        where,
        ...select,
      })
    },
  },
)
