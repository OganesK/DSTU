import { queryField, nonNull, list } from 'nexus'

export const MedicalRecordFindCountQuery = queryField(
  'findManyMedicalRecordCount',
  {
    type: nonNull('Int'),

    resolve(_parent, args, { prisma }) {
      return prisma.medicalRecord.count(args as any)
    },
  },
)
