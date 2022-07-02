"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = __importDefault(require("../prisma-client"));
const jwt_1 = require("../integrations/jwt");
class MedicalRecordAPI {
    static async createOneMedicalRecord({ token, userId, medicalDiseaseNames, medicalProcedureNames, dentistId }) {
        const verifiedToken = await (0, jwt_1.verifyToken)(token);
        if (!verifiedToken) {
            throw new Error('Not authorized.');
        }
        const existingProcedures = await prisma_client_1.default.dentalProcedure.findMany({
            where: {
                name: {
                    in: medicalProcedureNames,
                },
            },
        });
        const existingDiseases = await prisma_client_1.default.dentalDisease.findMany({
            where: {
                name: {
                    in: medicalDiseaseNames,
                },
            },
        });
        if (!existingDiseases || !existingProcedures) {
            throw new Error('Provided disease or procedure does not exist in current database.');
        }
        const totalPrice = existingProcedures.reduce((acc, procedure) => {
            return acc + procedure.price;
        }, 0);
        const record = await prisma_client_1.default.medicalRecord.create({
            data: {
                patient: {
                    connect: {
                        id: userId,
                    },
                },
                procedures: {
                    connect: existingProcedures.map((procedure) => {
                        return { id: procedure.id };
                    }),
                },
                diseases: {
                    connect: existingDiseases.map((disease) => {
                        return { id: disease.id };
                    }),
                },
                dentist: {
                    connect: {
                        id: dentistId,
                    },
                },
                date: new Date(),
                totalPrice,
            },
        });
        if (!record) {
            throw new Error('An error occured.');
        }
        return record;
    }
    static async getAllMedicalRecords(token) {
        const verifiedToken = await (0, jwt_1.verifyToken)(token);
        if (!verifiedToken) {
            throw new Error('Not authorized.');
        }
        return prisma_client_1.default.medicalRecord.findMany({
            include: {
                patient: true,
                procedures: true,
                dentist: true,
                diseases: true,
            },
        });
    }
}
;
exports.default = MedicalRecordAPI;
