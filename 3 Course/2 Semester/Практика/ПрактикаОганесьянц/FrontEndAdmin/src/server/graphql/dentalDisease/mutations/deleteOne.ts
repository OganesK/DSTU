import { mutationField, nonNull } from 'nexus'

export const DentalDiseaseDeleteOneMutation = mutationField(
  'deleteOneDentalDisease',
  {
    type: 'dentalDisease',

    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.dentalDisease.delete({
        where,
        ...select,
      })
    },
  },
)
