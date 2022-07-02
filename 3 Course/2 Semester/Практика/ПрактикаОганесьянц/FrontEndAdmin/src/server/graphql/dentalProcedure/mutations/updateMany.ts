import { mutationField, nonNull } from 'nexus'

export const DentalProcedureUpdateManyMutation = mutationField(
  'updateManyDentalProcedure',
  {
    type: nonNull('BatchPayload'),

    resolve(_parent, args, { prisma }) {
      return prisma.dentalProcedure.updateMany(args as any)
    },
  },
)
