import { Router } from 'express';
import { getUsers } from '../controllers/users.js';

const router = Router();

router.get('/', getUsers);

export const userRoutes = router;