import { queryField, nonNull } from 'nexus'

export const DentalDiseaseFindUniqueQuery = queryField(
  'findUniqueDentalDisease',
  {
    type: 'dentalDisease',

    resolve(_parent, { where }, { prisma, select }) {
      return prisma.dentalDisease.findUnique({
        where,
        ...select,
      })
    },
  },
)
