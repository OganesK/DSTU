import { mutationField, nonNull } from 'nexus'

export const DentalProcedureUpdateOneMutation = mutationField(
  'updateOneDentalProcedure',
  {
    type: nonNull('dentalProcedure'),

    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.dentalProcedure.update({
        where,
        data,
        ...select,
      })
    },
  },
)
