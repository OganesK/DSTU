import { mutationField, nonNull } from 'nexus'

export const MedicalRecordUpdateManyMutation = mutationField(
  'updateManyMedicalRecord',
  {
    type: nonNull('BatchPayload'),

    resolve(_parent, args, { prisma }) {
      return prisma.medicalRecord.updateMany(args as any)
    },
  },
)
