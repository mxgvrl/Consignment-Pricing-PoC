import express, { Express, Request, Response } from 'express';
import generatedSpecifications from './generate';
import { Specification } from './types/Specification';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    const specifications: Specification[] = generatedSpecifications;
    res.send(specifications);
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});