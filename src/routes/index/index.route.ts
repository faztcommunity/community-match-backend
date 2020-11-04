import {  Request, Response, NextFunction, Router } from "express";
import jwt from "express-jwt";
import { indexController } from "./index.controller";

class IndexRoute {
  public router: Router = Router();

  constructor() {
    this.routes();
  }

  routes(): void {
    this.router.use("/", jwt({ secret: process.env.JWT_SECRET as string, algorithms: ["HS256"] }), 
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err.name === "UnauthorizedError") {
          return res.status(401).json({ error: "Unauthorized"});
        }
        next();
      });
    this.router.route("/").get(indexController.getIndex);
  }
}

const indexRoute = new IndexRoute();
export default indexRoute.router;
