import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRouter } from './Module/User/user.router';
const app: Application = express();

app.use(express.json());
app.use(cors);
// Router setup

app.use('/api/user', UserRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

console.log(process.cwd());

export default app;
