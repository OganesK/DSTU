import { mutationField, nonNull } from 'nexus'

export const MedicalRecordCreateOneMutation = mutationField(
  'createOneMedicalRecord',
  {
    type: nonNull('medicalRecord'),

    resolve(_parent, { data }, { prisma, select }) {
      return prisma.medicalRecord.create({
        data,
        ...select,
      })
    },
  },
)
