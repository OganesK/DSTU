"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dentalDiseaeRoutes = void 0;
const dentalDisease_schema_1 = require("../schemas/dentalDisease.schema");
const dentalDisease_controller_1 = require("../controllers/dentalDisease.controller");
const dentalDiseaeRoutes = (fastify, opts, next) => {
    fastify.post('/createOneDentalDisease', {
        schema: dentalDisease_schema_1.createOneDentalDiseaseSchema,
        handler: dentalDisease_controller_1.createOneDiseaseController,
    });
    fastify.get('/getAllDentalDiseases', {
        schema: {
            headers: {
                token: { type: 'string' },
            },
        },
        handler: dentalDisease_controller_1.getAllDentalDiseasesController,
    });
    next();
};
exports.dentalDiseaeRoutes = dentalDiseaeRoutes;
