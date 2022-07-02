import { queryField, nonNull, list } from 'nexus'

export const DentalProcedureFindManyQuery = queryField(
  'findManyDentalProcedure',
  {
    type: nonNull(list(nonNull('dentalProcedure'))),

    resolve(_parent, args, { prisma, select }) {
      return prisma.dentalProcedure.findMany({
        ...args,
        ...select,
      })
    },
  },
)
