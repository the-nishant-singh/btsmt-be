// NPM Dependencies
import * as status from "http-status";
import * as express from "express";

// Internal Dependencies
import { AlertHelpers, ValidateAlertFeilds } from "./helpers";
import { AuthenticatedRequest } from "interfaces/authenticated-request";

export class AlertRoutes {
  public static get = async (
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const query = req.query;
      const data = await AlertHelpers.findAll(query);
      res.json(data)

    } catch (error) {
      next(error);
    }
  };

  public static create = async (
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const document = req.body.document;
      ValidateAlertFeilds(document)
      if(document.activeDays === 'Every'){
        document.activeDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      }else{
        document.activeDays = [document.activeDays]
      }
      const data = await AlertHelpers.create(document);
      res.json(data)
    } catch (error) {
      next(error);
    }
  };
  public static delete = async (
    req: AuthenticatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const id = req.params.id;
      const data = AlertHelpers.softDelete(id);
      res.json(data)
    } catch (error) {
      next(error);
    }
  };
}
