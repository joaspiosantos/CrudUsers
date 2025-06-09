import { ApiProvider } from '@/shared/providers/api.provider';
import type { RequestHandler } from 'express';

export const httpNotFoundError: RequestHandler = function (req, res) {
  const summary = 'Não encontrado';
  const data = null;
  const self = req.originalUrl;
  const response = ApiProvider({ data, self, summary });

  res.status(404).json(response);
};
