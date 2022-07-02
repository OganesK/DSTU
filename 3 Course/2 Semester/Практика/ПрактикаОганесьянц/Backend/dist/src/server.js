"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restServer = void 0;
const fastify_1 = __importDefault(require("fastify"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const config_1 = require("./config");
const logger_1 = require("./logger");
const base_routes_1 = __importDefault(require("./routes/base.routes"));
const user_routes_1 = require("./routes/user.routes");
const dentalDisease_routes_1 = require("./routes/dentalDisease.routes");
const dentalProcedure_routes_1 = require("./routes/dentalProcedure.routes");
const medicalRecord_routes_1 = require("./routes/medicalRecord.routes");
const whitelist = [
    'http://localhost:5000',
    'http://localhost:4000',
    'http://localhost:3000',
];
const server = (0, fastify_1.default)();
server.register(swagger_1.default, {
    routePrefix: '/documentation',
    swagger: {
        info: {
            title: 'Dental-clinit restAPI',
            description: 'Documentation',
            version: '1.0.0',
        },
        host: 'localhost',
        schemes: ['https', 'http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        securityDefinitions: {
            apiKey: {
                type: 'apiKey',
                name: 'apiKey',
                in: 'header',
            },
        },
        security: [{
                apiKey: [],
            }],
    },
    exposeRoute: true,
});
server.register(base_routes_1.default);
server.register(user_routes_1.userRoutes, { prefix: 'user' });
server.register(dentalDisease_routes_1.dentalDiseaeRoutes, { prefix: 'dentalDisease' });
server.register(dentalProcedure_routes_1.dentalProcedureRoutes, { prefix: 'dentalProcedure' });
server.register(medicalRecord_routes_1.medicalRecordRoutes, { prefix: 'medicalRecord' });
const restServer = () => {
    server.listen(config_1.PORT, '0.0.0.0', () => {
        logger_1.logger.info(`Server started at http://0.0.0.0:${config_1.PORT}`);
    });
};
exports.restServer = restServer;
