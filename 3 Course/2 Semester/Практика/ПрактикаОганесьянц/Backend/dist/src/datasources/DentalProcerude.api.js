"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../integrations/jwt");
const prisma_client_1 = __importDefault(require("../prisma-client"));
class DentalProcedureAPI {
    static async createDentalProcedure({ name, token, price }) {
        const existingProcedure = await prisma_client_1.default.dentalProcedure.findUnique({
            where: {
                name,
            },
        });
        if (existingProcedure) {
            throw new Error('Dental procedure with provided name already exist.');
        }
        const verifiedToken = await (0, jwt_1.verifyToken)(token);
        if (!verifiedToken) {
            throw new Error('Not authorized.');
        }
        const procedure = await prisma_client_1.default.dentalProcedure.create({
            data: {
                name,
                price,
            },
        });
        if (!procedure) {
            throw new Error('An error occured.');
        }
        return procedure;
    }
    static async getAllDentalDiseases(userToken) {
        const verifiedToken = await (0, jwt_1.verifyToken)(userToken);
        if (!verifiedToken) {
            throw new Error('Not authorized!');
        }
        return prisma_client_1.default.dentalProcedure.findMany({});
    }
}
;
exports.default = DentalProcedureAPI;
