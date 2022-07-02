"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const auth_schema_1 = require("../schemas/auth.schema");
const user_controller_1 = require("../controllers/user.controller");
const userRoutes = (fastify, opts, next) => {
    fastify.post('/signUp', { schema: auth_schema_1.signUpSchema }, user_controller_1.UserController.signUp);
    fastify.post('/signIn', { schema: auth_schema_1.signInSchema, handler: user_controller_1.UserController.signIn });
    next();
};
exports.userRoutes = userRoutes;
