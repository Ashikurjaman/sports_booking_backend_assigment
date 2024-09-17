import express, { Request, Response } from 'express';
import cors from 'cors';
import { UserRouter } from './Module/User/user.router';
import { facilityRoute } from './Module/Facility/facility.router';
import { notFound } from './middleware/noFound';

const app = express();
app.use(express.json());
app.use(cors());
// Router setup

app.use('/api/auth', UserRouter);
app.use('/api/facility', facilityRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(notFound);

console.log(process.cwd());

export default app;
