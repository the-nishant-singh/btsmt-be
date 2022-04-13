import * as express from 'express';
import * as status from 'http-status';
import { AuthRouter } from "./auth";
import { AlertRouter } from "./alerts";
import { ChartRouter } from "./charts";
import { Middleware } from '../services/middleware';

const middleware = new Middleware();

export const api = express.Router();
api.use(middleware.jwtDecoder);
api.use("/auth", new AuthRouter().router);
api.use("/alerts", new AlertRouter().router);
api.use("/chart", new ChartRouter().router);
api.use((err, req, res, next) => {
    res.status(err.code || status.INTERNAL_SERVER_ERROR).send(err);
});