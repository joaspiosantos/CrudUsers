import { CreateUserDTO } from '@/modules/user/dtos/user.dtos';
import { UserRepository } from '@/modules/user/repositories/user.repositories';
import { ApiProvider } from '@/shared/providers/api.provider';
import type { RequestHandler } from 'express';

export const UserCreateController: RequestHandler = async function (req, res, next) {
  try {
    const { body } = req;
    const userDTO = CreateUserDTO(body);
    const user = await UserRepository.create(userDTO);
    const response = ApiProvider({
      data: user,
      self: req.originalUrl,
      summary: 'Usuário Criado'
    });

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
