import { Router } from 'express';
import { getHotels } from '../controllers/hotelsController';

export const hotelsRouter = Router();

hotelsRouter.get('/', getHotels);