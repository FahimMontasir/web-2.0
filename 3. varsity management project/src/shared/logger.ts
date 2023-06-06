import path from 'path';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import config from '../config';
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${date.toDateString()} ${hours}:${minutes}:${seconds} [${label}] ${level}: ${message}`;
});

const isProduction = config.env === 'production';

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'VMP-AUTH' }),
    timestamp(),
    customFormat
    // prettyPrint()
  ),
  transports: [
    isProduction
      ? new DailyRotateFile({
          filename: path.join(
            process.cwd(),
            'logs',
            'successes',
            'vmp-%DATE%-success.log'
          ),
          datePattern: 'YYYY-DD-MM-HH',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        })
      : new transports.Console(),
  ],
});

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'VMP-AUTH' }), timestamp(), customFormat),
  transports: [
    isProduction
      ? new DailyRotateFile({
          filename: path.join(
            process.cwd(),
            'logs',
            'errors',
            'vmp-%DATE%-error.log'
          ),
          datePattern: 'YYYY-DD-MM-HH',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        })
      : new transports.Console(),
  ],
});

export { logger, errorLogger };
