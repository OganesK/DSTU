import { queryField, nonNull, list } from 'nexus'

export const DentalDiseaseFindCountQuery = queryField(
  'findManyDentalDiseaseCount',
  {
    type: nonNull('Int'),

    resolve(_parent, args, { prisma }) {
      return prisma.dentalDisease.count(args as any)
    },
  },
)
