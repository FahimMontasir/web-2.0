import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database connected successfully');

    app.listen(config.port, () => {
      logger.info(`listening port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Database connection failed!', error);
  }
};

connectDB();
