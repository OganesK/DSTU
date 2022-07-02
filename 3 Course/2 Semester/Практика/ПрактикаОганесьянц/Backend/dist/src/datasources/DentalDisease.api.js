"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../integrations/jwt");
const prisma_client_1 = __importDefault(require("../prisma-client"));
class DentalDiseaseAPI {
    static async CreateDentalDisease({ name, token }) {
        const existingDisease = await prisma_client_1.default.dentalDisease.findUnique({
            where: {
                name,
            },
        });
        const verifiedToken = await (0, jwt_1.verifyToken)(token);
        if (!verifiedToken) {
            throw new Error('Not authorized!');
        }
        if (existingDisease) {
            throw new Error('Disease with provided name already exists.');
        }
        const disease = await prisma_client_1.default.dentalDisease.create({
            data: {
                name,
            },
        });
        if (!disease) {
            throw new Error('An error occured');
        }
        return disease;
    }
    static async getAllDentalDiseases(userToken) {
        const verifiedToken = await (0, jwt_1.verifyToken)(userToken);
        if (!verifiedToken) {
            throw new Error('Not authorized!');
        }
        return prisma_client_1.default.dentalDisease.findMany({});
    }
}
;
exports.default = DentalDiseaseAPI;
