import { FastifyInstance } from 'fastify';
declare const base: (fastify: FastifyInstance, opts: any, next: (err?: Error) => void) => void;
export default base;
