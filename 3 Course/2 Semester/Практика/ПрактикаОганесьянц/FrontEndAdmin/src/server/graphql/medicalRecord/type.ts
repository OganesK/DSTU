import { objectType } from 'nexus'

export const medicalRecord = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'medicalRecord',
  definition(t) {
    t.string('id')
    t.field('date', { type: 'DateTime' })
    t.string('patientId')
    t.field('patient', {
      type: 'User',
      resolve(root: any) {
        return root.patient
      },
    })
    t.string('dentistId')
    t.field('dentist', {
      type: 'User',
      resolve(root: any) {
        return root.dentist
      },
    })
    t.float('totalPrice')
    t.list.field('diseases', {
      type: 'dentalDisease',
      args: {
        where: 'dentalDiseaseWhereInput',
        orderBy: 'dentalDiseaseOrderByWithRelationInput',
        cursor: 'dentalDiseaseWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'DentalDiseaseScalarFieldEnum',
      },
      resolve(root: any) {
        return root.diseases
      },
    })
    t.list.field('procedures', {
      type: 'dentalProcedure',
      args: {
        where: 'dentalProcedureWhereInput',
        orderBy: 'dentalProcedureOrderByWithRelationInput',
        cursor: 'dentalProcedureWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'DentalProcedureScalarFieldEnum',
      },
      resolve(root: any) {
        return root.procedures
      },
    })
    t.nullable.field('_count', {
      type: 'MedicalRecordCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
