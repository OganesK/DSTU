"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const server_1 = require("./server");
const numCpus = (0, os_1.cpus)().length;
// if (cluster.isPrimary) {
//   for (let cpu = 0; cpu < numCpus; cpu += 1) {
//     cluster.fork();
//   }
// } else {
//   restServer();
// }
(0, server_1.restServer)();
