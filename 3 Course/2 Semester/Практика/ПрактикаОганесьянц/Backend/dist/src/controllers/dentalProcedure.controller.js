"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProceduresController = exports.createOneProcedureController = void 0;
const DentalProcerude_api_1 = __importDefault(require("../datasources/DentalProcerude.api"));
const createOneProcedureController = async (req, reply) => {
    const dentalProcedure = await DentalProcerude_api_1.default.createDentalProcedure({ name: req.body.name, token: req.headers.token, price: req.body.price });
    reply.send(dentalProcedure);
};
exports.createOneProcedureController = createOneProcedureController;
const getAllProceduresController = async (req, reply) => {
    const allProcedures = await DentalProcerude_api_1.default.getAllDentalDiseases(req.headers.token);
    reply.send(allProcedures);
};
exports.getAllProceduresController = getAllProceduresController;
