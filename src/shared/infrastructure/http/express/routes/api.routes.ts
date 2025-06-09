import { userRoutes } from '@/modules/user/routes/user.routes';
import { usersRoutes } from '@/modules/user/routes/users.routes';
import { Router } from 'express';

export const apiRoutes = Router();

apiRoutes.use('/api/v1', userRoutes);

apiRoutes.use('/api/v1', usersRoutes);
