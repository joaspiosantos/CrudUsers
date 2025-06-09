import { UserRepository } from '@/modules/user/repositories/user.repositories';
import { ApiProvider } from '@/shared/providers/api.provider';
import type { RequestHandler } from 'express';

export const UserListController: RequestHandler = async function (req, res, next) {
  try {
    const list = await UserRepository.list();
    const response = ApiProvider({
      data: list,
      self: req.originalUrl,
      summary: 'Lista de Usuários'
    });
    
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
