import cluster from 'cluster';
import { cpus } from 'os';

import { restServer } from './server';

const numCpus = cpus().length;

if (cluster.isPrimary) {
  for (let cpu = 0; cpu < numCpus; cpu += 1) {
    cluster.fork();
  }
} else {
  restServer();
}

// restServer();
