"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOneDentalDiseaseSchema = void 0;
exports.createOneDentalDiseaseSchema = {
    response: {
        200: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                name: { type: 'string' },
            },
        },
    },
    body: {
        type: 'object',
        properties: {
            name: { type: 'string' },
        },
        required: ['name'],
    },
    headers: {
        token: { type: 'string' },
    },
};
