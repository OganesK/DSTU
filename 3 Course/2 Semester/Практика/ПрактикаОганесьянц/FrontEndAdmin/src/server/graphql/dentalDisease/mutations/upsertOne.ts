import { mutationField, nonNull } from 'nexus'

export const DentalDiseaseUpsertOneMutation = mutationField(
  'upsertOneDentalDisease',
  {
    type: nonNull('dentalDisease'),

    resolve(_parent, args, { prisma, select }) {
      return prisma.dentalDisease.upsert({
        ...args,
        ...select,
      })
    },
  },
)
