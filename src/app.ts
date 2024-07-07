import cors from 'cors';
import express, {
  Application,
  NextFunction,
  Request,
  response,
  Response,
} from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.routes';
import globalErrorhandler from './app/middleware/globalErrorhandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use('/api/v1/students', StudentRoutes);
// app.use('/api/v1/users', UserRoutes);
app.use('/api/v1', router);

// const getAController = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome To The Server !!!',
  });
});

app.use(globalErrorhandler);
app.use(notFound);

export default app;
