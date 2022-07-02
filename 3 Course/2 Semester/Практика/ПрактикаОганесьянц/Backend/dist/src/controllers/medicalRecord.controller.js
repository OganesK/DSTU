"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMedicalRecordsController = exports.createOneMedicalController = void 0;
const MedicalRecord_api_1 = __importDefault(require("../datasources/MedicalRecord.api"));
const createOneMedicalController = async (req, reply) => {
    const medicalRecord = await MedicalRecord_api_1.default.createOneMedicalRecord({
        dentistId: req.body.dentistId,
        medicalDiseaseNames: req.body.medicalDiseaseNames,
        medicalProcedureNames: req.body.medicalProcedureNames,
        userId: req.body.userId,
        token: req.headers.token,
    });
    reply.send(medicalRecord);
};
exports.createOneMedicalController = createOneMedicalController;
const getAllMedicalRecordsController = async (req, reply) => {
    const medicalRecords = await MedicalRecord_api_1.default.getAllMedicalRecords(req.headers.token);
    reply.send(medicalRecords);
};
exports.getAllMedicalRecordsController = getAllMedicalRecordsController;
;
