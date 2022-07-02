import { mutationField, nonNull } from 'nexus'

export const DentalProcedureUpsertOneMutation = mutationField(
  'upsertOneDentalProcedure',
  {
    type: nonNull('dentalProcedure'),

    resolve(_parent, args, { prisma, select }) {
      return prisma.dentalProcedure.upsert({
        ...args,
        ...select,
      })
    },
  },
)
