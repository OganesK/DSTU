import { mutationField, nonNull } from 'nexus'

export const MedicalRecordUpsertOneMutation = mutationField(
  'upsertOneMedicalRecord',
  {
    type: nonNull('medicalRecord'),

    resolve(_parent, args, { prisma, select }) {
      return prisma.medicalRecord.upsert({
        ...args,
        ...select,
      })
    },
  },
)
