"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.HASH_SALT = exports.PORT = exports.SERVICE_NAME = void 0;
exports.SERVICE_NAME = 'template';
exports.PORT = process.env.PORT || 3000;
exports.HASH_SALT = process.env.HASH_SALT || 7;
exports.JWT_SECRET = process.env.JWT_SECRET || 'change me';
