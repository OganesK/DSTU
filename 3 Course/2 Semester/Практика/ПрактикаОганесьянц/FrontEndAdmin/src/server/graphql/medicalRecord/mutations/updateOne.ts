import { mutationField, nonNull } from 'nexus'

export const MedicalRecordUpdateOneMutation = mutationField(
  'updateOneMedicalRecord',
  {
    type: nonNull('medicalRecord'),

    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.medicalRecord.update({
        where,
        data,
        ...select,
      })
    },
  },
)
