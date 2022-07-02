import { mutationField, nonNull } from 'nexus'

export const DentalProcedureDeleteOneMutation = mutationField(
  'deleteOneDentalProcedure',
  {
    type: 'dentalProcedure',

    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.dentalProcedure.delete({
        where,
        ...select,
      })
    },
  },
)
