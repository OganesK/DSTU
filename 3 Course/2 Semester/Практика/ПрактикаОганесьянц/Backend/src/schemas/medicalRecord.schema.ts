const medicalRecord = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    patient: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        role: { type: 'string' },
      },
    },
    dentist: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        role: { type: 'string' },
      },
    },
    diseases: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
        },
      },
    },
    procedure: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          price: { type: 'number' },
        },
      },
    },
  },
};

export const createMedicalRecordSchema = {
  response: {
    200: medicalRecord,
  },
  body: {
    type: 'object',
    properties: {
      dentistId: { type: 'string' },
      userId: { type: 'string' },
      medicalProcedureNames: {
        type: 'array',
        items: { type: 'string' },
      },
      medicalDiseaseNames: {
        type: 'array',
        items: { type: 'string' },
      },
    },
    required: ['dentistId', 'userId', 'medicalProcedureNames', 'medicalDiseaseNames'],
  },
  headers: {
    token: { type: 'string' },
  },
};

export const getAllMedicalRecordsSchema = {
  response: {
    200: {
      type: 'array',
      items: medicalRecord,
    },
  },
  headers: {
    token: { type: 'string' },
  },
};
