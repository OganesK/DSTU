"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDentalProceduresSchema = exports.createDentalProcedureSchema = void 0;
exports.createDentalProcedureSchema = {
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
exports.getAllDentalProceduresSchema = {
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
