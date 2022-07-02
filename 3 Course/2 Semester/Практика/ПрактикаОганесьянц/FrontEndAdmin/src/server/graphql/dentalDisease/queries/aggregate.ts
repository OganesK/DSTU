import { queryField, list } from 'nexus'

export const DentalDiseaseAggregateQuery = queryField(
  'aggregateDentalDisease',
  {
    type: 'AggregateDentalDisease',

    resolve(_parent, args, { prisma, select }) {
      return prisma.dentalDisease.aggregate({ ...args, ...select }) as any
    },
  },
)
