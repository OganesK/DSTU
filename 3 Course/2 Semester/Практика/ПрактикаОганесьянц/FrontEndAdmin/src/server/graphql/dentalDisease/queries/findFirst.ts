import { queryField, list } from 'nexus'

export const DentalDiseaseFindFirstQuery = queryField(
  'findFirstDentalDisease',
  {
    type: 'dentalDisease',

    resolve(_parent, args, { prisma, select }) {
      return prisma.dentalDisease.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
