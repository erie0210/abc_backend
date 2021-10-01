import * as express from 'express';

import userRouter from './recipe/router';

const app: express.Express = express();
const PORT: number = 8000;

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(userRouter);
  }

  private setMiddleware() {
    this.app.use((req, res, next) => {
      next();
    });

    //* json middleware
    this.app.use(express.json());

    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      res.send({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(PORT, () => {
      console.log(`🚀Server is running on http://localhost:${PORT} ✅`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
