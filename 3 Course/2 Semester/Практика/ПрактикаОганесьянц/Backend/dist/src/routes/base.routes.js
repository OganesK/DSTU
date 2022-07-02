"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../controllers/base.controller");
const base = (fastify, opts, next) => {
    fastify.get('/', base_controller_1.base);
    next();
};
exports.default = base;
