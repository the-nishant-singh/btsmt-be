// NPM Dependencies
import * as status from "http-status";
import * as express from "express";

// Internal Dependencies
import { ChartHelpers } from "./helpers";
import { AuthenticatedRequest } from "interfaces/authenticated-request";

export class ChartRoutes {
  public static get = async (
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const data = await ChartHelpers.findAll();
      res.json(data)
    } catch (error) {
      next(error);
    }
  };
}
