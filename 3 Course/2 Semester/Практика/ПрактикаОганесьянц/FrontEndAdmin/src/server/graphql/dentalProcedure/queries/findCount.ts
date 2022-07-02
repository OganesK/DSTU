import { queryField, nonNull, list } from 'nexus'

export const DentalProcedureFindCountQuery = queryField(
  'findManyDentalProcedureCount',
  {
    type: nonNull('Int'),

    resolve(_parent, args, { prisma }) {
      return prisma.dentalProcedure.count(args as any)
    },
  },
)
