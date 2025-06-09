import { server } from '@/shared/infrastructure/http/express/server';

server.listen(8888, () => {
  console.log("Servidor iniciado na porta 8888.");
})