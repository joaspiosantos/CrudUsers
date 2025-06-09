import { ApiProvider } from '@/shared/providers/api.provider';
import type { ErrorRequestHandler } from 'express';

export const httpInternalError: ErrorRequestHandler = function (err, req, res, _) {
  console.error(err);
  const status = err.status || 500;
  const error = err.message || 'Erro interno no servidor';
  const data = null;
  const self = req.originalUrl;
  const response = ApiProvider({ data, self, error });

  res.status(status).json(response);
};
