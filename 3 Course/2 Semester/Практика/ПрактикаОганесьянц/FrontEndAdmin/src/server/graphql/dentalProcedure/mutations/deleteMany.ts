import { mutationField, nonNull } from 'nexus'

export const DentalProcedureDeleteManyMutation = mutationField(
  'deleteManyDentalProcedure',
  {
    type: nonNull('BatchPayload'),

    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.dentalProcedure.deleteMany({ where } as any)
    },
  },
)
