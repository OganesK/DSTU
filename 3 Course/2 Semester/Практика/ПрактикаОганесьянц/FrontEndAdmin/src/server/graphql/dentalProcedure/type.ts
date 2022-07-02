import { objectType } from 'nexus'

export const dentalProcedure = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'dentalProcedure',
  definition(t) {
    t.string('id')
    t.string('name')
    t.float('price')
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
      type: 'DentalProcedureCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
