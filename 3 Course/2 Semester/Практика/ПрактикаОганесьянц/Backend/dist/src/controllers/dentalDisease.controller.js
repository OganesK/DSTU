"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDentalDiseasesController = exports.createOneDiseaseController = void 0;
const DentalDisease_api_1 = __importDefault(require("../datasources/DentalDisease.api"));
const createOneDiseaseController = async (req, reply) => {
    const dentalDisease = await DentalDisease_api_1.default.CreateDentalDisease({ name: req.body.name, token: req.headers.token });
    reply.send(dentalDisease);
};
exports.createOneDiseaseController = createOneDiseaseController;
const getAllDentalDiseasesController = async (req, reply) => {
    const getAllDentalDiseases = await DentalDisease_api_1.default.getAllDentalDiseases(req.headers.token);
    reply.send(getAllDentalDiseases);
};
exports.getAllDentalDiseasesController = getAllDentalDiseasesController;
