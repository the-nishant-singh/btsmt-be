// NPM Dependencies
import * as express from "express";
import * as status from "http-status";
import * as StandardError from "standard-error";
import * as jwt from "jwt-simple";
import * as bcrypt from "bcryptjs";

// Internal Dependencies
import { User } from "../../db";

// Helpers
import { getJwtPayload, validateRegisterFields, validateloginFields } from "./helpers";

const JWT_SECRET = process.env.JWT_SECRET || "spiderman";

export class AuthRoutes {
  public static async signIn(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { email, password } = req.body.user;
      validateloginFields(req.body.user)
      const user = await User.findOne({ email });
      if (!user) {
        throw new StandardError({
          message: "Invalid email or password",
          code: status.CONFLICT,
        });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new StandardError({
          message: "Invalid email or password",
          code: status.CONFLICT,
        });
      }
      res.json({
        token: jwt.encode(getJwtPayload(user), JWT_SECRET),
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  public static async register(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { email, password, name } = req.body.user;
      validateRegisterFields(req.body.user)
      const user = await User.findOne({ email });
      if (user) {
        throw new StandardError({
          message: "Email already in use",
          code: status.CONFLICT,
        });
      } else {
        const hash = await bcrypt.hash(password, 8);
        const newUser = await User.create({ email, name, password: hash });
        return res.json({
          token: jwt.encode(getJwtPayload(newUser), JWT_SECRET),
          user: newUser,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}
