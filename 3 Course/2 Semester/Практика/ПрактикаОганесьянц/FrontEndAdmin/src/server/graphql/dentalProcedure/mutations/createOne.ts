import { mutationField, nonNull } from 'nexus'

export const DentalProcedureCreateOneMutation = mutationField(
  'createOneDentalProcedure',
  {
    type: nonNull('dentalProcedure'),

    resolve(_parent, { data }, { prisma, select }) {
      return prisma.dentalProcedure.create({
        data,
        ...select,
      })
    },
  },
)
