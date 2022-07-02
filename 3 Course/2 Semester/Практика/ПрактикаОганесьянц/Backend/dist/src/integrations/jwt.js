"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createRefreshToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const createToken = (user) => {
    return jsonwebtoken_1.default.sign({
        userId: user.id,
        iss: 'Issuer',
    }, config_1.JWT_SECRET, {
        algorithm: 'HS256',
    });
};
exports.createToken = createToken;
const createRefreshToken = (user) => {
    return jsonwebtoken_1.default.sign({ userId: user.id, tokenVersion: user.tokenVersion }, process.env.JWT_REFRESH_SECRET);
};
exports.createRefreshToken = createRefreshToken;
const verifyToken = async (token) => {
    return jsonwebtoken_1.default.verify(token, 'change me', (err, decoded) => {
        if (err) {
            return false;
        }
        return true;
    });
};
exports.verifyToken = verifyToken;
