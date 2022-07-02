import { queryField, list } from 'nexus'

export const DentalProcedureFindFirstQuery = queryField(
  'findFirstDentalProcedure',
  {
    type: 'dentalProcedure',

    resolve(_parent, args, { prisma, select }) {
      return prisma.dentalProcedure.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
