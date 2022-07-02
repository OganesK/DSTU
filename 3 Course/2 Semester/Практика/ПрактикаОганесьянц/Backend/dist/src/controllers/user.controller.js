"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_client_1 = __importDefault(require("../prisma-client"));
const config_1 = require("../config");
const jwt_1 = require("../integrations/jwt");
class UserController {
    static async signUp(req, reply) {
        const existingUser = await prisma_client_1.default.user.findUnique({
            where: {
                login: req.body.login,
            },
        });
        if (existingUser) {
            throw new Error('User with provided login is already exist.');
        }
        const hashedPassword = await bcrypt_1.default.hash(req.body.password, config_1.HASH_SALT);
        const user = await prisma_client_1.default.user.create({
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: hashedPassword,
                role: req.body.role,
                login: req.body.login,
                age: req.body.age,
            },
        });
        const token = (0, jwt_1.createToken)(user);
        reply.send({ token });
    }
    static async signIn(req, reply) {
        const user = await prisma_client_1.default.user.findUnique({
            where: {
                login: req.body.login,
            },
        });
        if (!user) {
            throw new Error('Incorrect login or password');
        }
        const passwordMatch = await bcrypt_1.default.compare(req.body.password, user.password);
        if (!passwordMatch) {
            throw new Error('Incorrect password.');
        }
        const token = (0, jwt_1.createToken)(user);
        reply.send({ token });
    }
}
exports.UserController = UserController;
