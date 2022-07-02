import { mutationField, nonNull } from 'nexus'

export const DentalDiseaseUpdateOneMutation = mutationField(
  'updateOneDentalDisease',
  {
    type: nonNull('dentalDisease'),

    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.dentalDisease.update({
        where,
        data,
        ...select,
      })
    },
  },
)
