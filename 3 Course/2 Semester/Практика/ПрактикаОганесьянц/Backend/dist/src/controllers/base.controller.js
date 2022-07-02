"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = void 0;
const package_json_1 = require("../../package.json");
const base = (req, reply) => {
    reply.send({ message: `Dental clinic crm, ver ${package_json_1.version}` });
};
exports.base = base;
