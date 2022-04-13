// NPM Deps
import * as express from "express";
import { Middleware } from "../../services/middleware";

// Internal Deps
import { AlertRoutes } from "./routes";

const middleware = new Middleware();
export class AlertRouter {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.router.use(middleware.requireLogin);
    this.router.get("/", AlertRoutes.get);
    this.router.post("/", AlertRoutes.create);
    this.router.delete("/:id", AlertRoutes.delete);
  }
}
