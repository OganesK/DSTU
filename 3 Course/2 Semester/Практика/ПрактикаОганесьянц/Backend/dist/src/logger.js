"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const config_1 = require("./config");
const customFormat = winston_1.default.format((info, opts) => {
    const res = {};
    res.timestamp = info.timestamp;
    Object.assign(res, info);
    return res;
});
exports.logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), customFormat(), winston_1.default.format.json()),
    defaultMeta: {
        service: config_1.SERVICE_NAME,
    },
    transports: [
        new (winston_1.default.transports.Console)({
            level: 'info',
        }),
    ],
});
