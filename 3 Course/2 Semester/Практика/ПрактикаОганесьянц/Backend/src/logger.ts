import winston from 'winston';
import { SERVICE_NAME } from './config';

const customFormat = winston.format((info, opts) => {
  const res: any = {};

  res.timestamp = info.timestamp;
  Object.assign(res, info);

  return res;
});

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    customFormat(),
    winston.format.json(),
  ),
  defaultMeta: {
    service: SERVICE_NAME,
  },
  transports: [
    new (winston.transports.Console)({
      level: 'info',
    }),
  ],
});
