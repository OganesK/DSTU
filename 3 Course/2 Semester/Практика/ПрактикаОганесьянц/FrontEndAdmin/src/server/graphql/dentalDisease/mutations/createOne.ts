import { mutationField, nonNull } from 'nexus'

export const DentalDiseaseCreateOneMutation = mutationField(
  'createOneDentalDisease',
  {
    type: nonNull('dentalDisease'),

    resolve(_parent, { data }, { prisma, select }) {
      return prisma.dentalDisease.create({
        data,
        ...select,
      })
    },
  },
)
