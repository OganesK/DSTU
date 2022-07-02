import { queryField, list } from 'nexus'

export const DentalProcedureAggregateQuery = queryField(
  'aggregateDentalProcedure',
  {
    type: 'AggregateDentalProcedure',

    resolve(_parent, args, { prisma, select }) {
      return prisma.dentalProcedure.aggregate({ ...args, ...select }) as any
    },
  },
)
