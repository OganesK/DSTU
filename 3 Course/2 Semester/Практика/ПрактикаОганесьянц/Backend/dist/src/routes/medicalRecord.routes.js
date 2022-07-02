"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicalRecordRoutes = void 0;
const medicalRecord_controller_1 = require("../controllers/medicalRecord.controller");
const medicalRecord_schema_1 = require("../schemas/medicalRecord.schema");
const medicalRecordRoutes = (fastify, opts, next) => {
    fastify.post('/createOneMedicalRecord', {
        schema: medicalRecord_schema_1.createMedicalRecordSchema,
        handler: medicalRecord_controller_1.createOneMedicalController,
    });
    fastify.get('/getAllMedicalRecords', {
        schema: medicalRecord_schema_1.getAllMedicalRecordsSchema,
        handler: medicalRecord_controller_1.getAllMedicalRecordsController,
    });
    next();
};
exports.medicalRecordRoutes = medicalRecordRoutes;
