import { UserCreateController } from '@/modules/user/controller/create.controller';
import { UserListController } from '@/modules/user/controller/list.controller';
import { Router } from 'express';

export const usersRoutes = Router();

// Lista de usuários
usersRoutes.get('/users', UserListController);

// Usuário especifico
// usersRoutes.get('/users/:id');

// Novo usuário
usersRoutes.post('/users', UserCreateController);

// Atualiza usuário
// usersRoutes.put('/users/:id');

// Deleta usuário
// usersRoutes.delete('/users/:id');
