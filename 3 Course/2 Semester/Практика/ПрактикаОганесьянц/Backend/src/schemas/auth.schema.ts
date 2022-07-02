export const signInSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        token: { type: 'string' },
      },
    },
  },
  body: {
    type: 'object',
    properties: {
      login: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['login', 'password'],
  },
};

export const signUpSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        token: { type: 'string' },
      },
    },
  },
  body: {
    type: 'object',
    properties: {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      role: { type: 'string' },
      login: { type: 'string' },
      password: { type: 'string' },
      age: { type: 'number' },
    },
    required: ['login', 'password', 'firstName', 'lastName', 'age', 'role'],
  },
};
