import { mutationField, nonNull } from 'nexus'

export const MedicalRecordDeleteManyMutation = mutationField(
  'deleteManyMedicalRecord',
  {
    type: nonNull('BatchPayload'),

    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.medicalRecord.deleteMany({ where } as any)
    },
  },
)
