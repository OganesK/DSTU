"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSchema = exports.signInSchema = void 0;
exports.signInSchema = {
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
exports.signUpSchema = {
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
