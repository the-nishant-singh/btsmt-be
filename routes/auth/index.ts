import * as express from 'express';
import { AuthRoutes } from './routes';

export class AuthRouter {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.router.post('/singin', AuthRoutes.signIn)
    this.router.post('/register', AuthRoutes.register)
  }
}

