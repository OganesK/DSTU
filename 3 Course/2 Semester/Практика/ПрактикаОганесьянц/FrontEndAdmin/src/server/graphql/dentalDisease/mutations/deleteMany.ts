import { mutationField, nonNull } from 'nexus'

export const DentalDiseaseDeleteManyMutation = mutationField(
  'deleteManyDentalDisease',
  {
    type: nonNull('BatchPayload'),

    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.dentalDisease.deleteMany({ where } as any)
    },
  },
)
