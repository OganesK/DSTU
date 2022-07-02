export const createDentalProcedureSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        price: { type: 'number' },
      },
    },
  },
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      price: { type: 'number' },
    },
    required: ['name'],
  },
  headers: {
    token: { type: 'string' },
  },
};

export const getAllDentalProceduresSchema = {
  response: {
    200: {
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
  headers: {
    token: { type: 'string' },
  },
};
