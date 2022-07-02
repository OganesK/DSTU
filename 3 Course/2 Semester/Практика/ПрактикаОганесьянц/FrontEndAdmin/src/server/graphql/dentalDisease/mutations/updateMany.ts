import { mutationField, nonNull } from 'nexus'

export const DentalDiseaseUpdateManyMutation = mutationField(
  'updateManyDentalDisease',
  {
    type: nonNull('BatchPayload'),

    resolve(_parent, args, { prisma }) {
      return prisma.dentalDisease.updateMany(args as any)
    },
  },
)
