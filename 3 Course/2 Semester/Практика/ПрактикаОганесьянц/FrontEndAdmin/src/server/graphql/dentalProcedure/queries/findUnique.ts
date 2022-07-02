import { queryField, nonNull } from 'nexus'

export const DentalProcedureFindUniqueQuery = queryField(
  'findUniqueDentalProcedure',
  {
    type: 'dentalProcedure',

    resolve(_parent, { where }, { prisma, select }) {
      return prisma.dentalProcedure.findUnique({
        where,
        ...select,
      })
    },
  },
)
