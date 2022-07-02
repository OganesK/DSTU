import { queryField, list } from 'nexus'

export const MedicalRecordFindFirstQuery = queryField(
  'findFirstMedicalRecord',
  {
    type: 'medicalRecord',

    resolve(_parent, args, { prisma, select }) {
      return prisma.medicalRecord.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
