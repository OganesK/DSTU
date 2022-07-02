import { queryField, list } from 'nexus'

export const MedicalRecordAggregateQuery = queryField(
  'aggregateMedicalRecord',
  {
    type: 'AggregateMedicalRecord',

    resolve(_parent, args, { prisma, select }) {
      return prisma.medicalRecord.aggregate({ ...args, ...select }) as any
    },
  },
)
