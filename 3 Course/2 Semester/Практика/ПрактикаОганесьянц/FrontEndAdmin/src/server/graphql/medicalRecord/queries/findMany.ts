import { queryField, nonNull, list } from 'nexus'

export const MedicalRecordFindManyQuery = queryField('findManyMedicalRecord', {
  type: nonNull(list(nonNull('medicalRecord'))),

  resolve(_parent, args, { prisma, select }) {
    return prisma.medicalRecord.findMany({
      ...args,
      ...select,
    })
  },
})
