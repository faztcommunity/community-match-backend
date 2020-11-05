import { Response, Request, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';


class UserController {
  async verifyJWT(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      jwt.verify(req.headers.authorization as string, process.env.JWT_SECRET as string);
      next();
    } catch (error) {
      switch (error.message) {
        case "invalid signature":
          return res.status(400).json( { error: error.message } );
        default:
          return res.status(401).json( { error: error.message } );
      }
    }
  }
}

export const userController = new UserController();
