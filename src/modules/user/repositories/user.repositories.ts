import { prisma } from '@/shared/infrastructure/database/prisma.database';
import type { User } from '@prisma/client';

export const UserRepository = {
  list: async function () {
    try {
      return await prisma.user.findMany({
        omit: {
          password: true
        }
      });
    } catch (error) {
      console.error('Problema ao listar todos os usuários. Erro: ', error);
      return [];
    }
  },
  create: async function (struct: Omit<User, 'id'>) {
    try {
      const id = crypto.randomUUID();
      const data = Object.assign({ ...struct }, { id });

      return await prisma.user.create({ data });
    } catch (error) {
      console.error('Problema ao criar usuário. Erro: ', error);
      return null;
    }
  }
};
