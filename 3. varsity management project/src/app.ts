import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app routes
app.use('/api/v1', routes);

// error middleware
app.use(globalErrorHandler);

// handle not found error
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api endpoint not found',
      },
    ],
  });
  next();
});

export default app;
