import { objectType } from 'nexus'

export const dentalDisease = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'dentalDisease',
  definition(t) {
    t.string('id')
    t.string('name')
    t.list.field('medicalRecords', {
      type: 'medicalRecord',
      args: {
        where: 'medicalRecordWhereInput',
        orderBy: 'medicalRecordOrderByWithRelationInput',
        cursor: 'medicalRecordWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'MedicalRecordScalarFieldEnum',
      },
      resolve(root: any) {
        return root.medicalRecords
      },
    })
    t.nullable.field('_count', {
      type: 'DentalDiseaseCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
