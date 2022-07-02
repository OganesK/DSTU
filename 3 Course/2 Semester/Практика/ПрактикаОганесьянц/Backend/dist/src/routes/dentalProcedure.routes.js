"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dentalProcedureRoutes = void 0;
const dentalProcedure_schema_1 = require("../schemas/dentalProcedure.schema");
const dentalProcedure_controller_1 = require("../controllers/dentalProcedure.controller");
const dentalProcedureRoutes = (fastify, opts, next) => {
    fastify.post('/createOneDentalProcedure', {
        schema: dentalProcedure_schema_1.createDentalProcedureSchema,
        handler: dentalProcedure_controller_1.createOneProcedureController,
    });
    fastify.get('/getAllDentalProcedures', {
        schema: dentalProcedure_schema_1.getAllDentalProceduresSchema,
        handler: dentalProcedure_controller_1.getAllProceduresController,
    });
    next();
};
exports.dentalProcedureRoutes = dentalProcedureRoutes;
