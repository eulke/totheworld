import express from 'express';
import { hotelsRouter } from './routes/hotelsRouter';

const api = express();

api.use('/hotels', hotelsRouter)
api.use('/hotels/:hotelId', hotelsRouter)

export default api;