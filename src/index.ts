import express, { json, NextFunction, Request, Response } from 'express';
import MongoConnection from './database/MongoConnection';
import statusRoutes from './routes/status.routes';
import urlRoutes from './routes/url.routes';

const api = express();
const URL = 'http://localhost:';
const PORT = 5000;

const database = new MongoConnection();
database.connection();

api.listen(5000, () => console.log(`Express listening ${URL}${PORT}`));

api.use(express.json());
api.use(statusRoutes);
api.use(urlRoutes);