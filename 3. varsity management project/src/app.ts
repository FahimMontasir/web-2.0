import express, { Application } from 'express';
import cors from 'cors';
import usersRouter from './modules/user/user.route';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// error middleware
app.use(globalErrorHandler);
//app routes
app.use('/api/v1/users', usersRouter);

export default app;
