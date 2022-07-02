import { mutationField, nonNull } from 'nexus'

export const MedicalRecordDeleteOneMutation = mutationField(
  'deleteOneMedicalRecord',
  {
    type: 'medicalRecord',

    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.medicalRecord.delete({
        where,
        ...select,
      })
    },
  },
)
