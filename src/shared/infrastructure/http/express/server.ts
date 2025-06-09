import { httpInternalError } from '@/shared/infrastructure/http/express/errors/internal-error.errors';
import { httpNotFoundError } from '@/shared/infrastructure/http/express/errors/not-found.errors';
import { apiRoutes } from '@/shared/infrastructure/http/express/routes/api.routes';
import express from 'express';
import https from 'node:https';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(apiRoutes);

app.use(httpNotFoundError);

app.use(httpInternalError);

export const server = https.createServer(app);
