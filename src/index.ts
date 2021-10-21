import express, { NextFunction, Request, Response } from 'express';
import statusRoutes from './routes/status.routes';

const api = express();
const URL = 'http://localhost:';
const PORT = 5000;

api.listen(5000, () => console.log(`Express listening ${URL}${PORT}`));

api.use(statusRoutes);