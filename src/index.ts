import express, { Express, Request, Response } from 'express';
import generatedSpecifications from './generate';
import { Specification } from './types/Specification';

const app: Express = express();
const port = 3000;

app.get('/specs', (req: Request, res: Response) => {
    const specifications: Specification[] = generatedSpecifications;
    res.send(specifications);
});

app.get('/hello', (req: Request, res: Response) => {
    res.send('hello');
});

app.get('/', (req: Request, res: Response) => {
    res.send('default');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});