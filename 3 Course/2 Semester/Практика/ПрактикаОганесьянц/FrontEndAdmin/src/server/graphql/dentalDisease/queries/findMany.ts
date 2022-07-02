import { queryField, nonNull, list } from 'nexus'

export const DentalDiseaseFindManyQuery = queryField('findManyDentalDisease', {
  type: nonNull(list(nonNull('dentalDisease'))),

  resolve(_parent, args, { prisma, select }) {
    return prisma.dentalDisease.findMany({
      ...args,
      ...select,
    })
  },
})
