import express from 'express';
import routes from './routes'

const app:any = express();

app.use('/authRoutes.js', routes);
