import express, { Application } from 'express';
import cors from 'cors';
import { UserRoute } from './modules/user/user.route';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app routes
app.use('/api/v1/users', UserRoute);

// error middleware
app.use(globalErrorHandler);
export default app;
