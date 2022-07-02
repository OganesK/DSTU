import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('firstName')
    t.string('lastName')
    t.int('age')
    t.string('login')
    t.string('password')
    t.field('role', { type: 'userRole' })
    t.list.field('medicalPatientRecord', {
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
        return root.medicalPatientRecord
      },
    })
    t.list.field('medicalDentistRecord', {
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
        return root.medicalDentistRecord
      },
    })
    t.nullable.int('tokenVersion')
    t.nullable.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
