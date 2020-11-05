import { Router } from "express";
import { indexController } from "./index.controller";
import { userController } from "../users/user.controller";

class IndexRoute {
  public router: Router = Router();

  constructor() {
    this.routes();
  }

  routes(): void {
    this.router.use("/", userController.verifyJWT);
    this.router.route("/").get(indexController.getIndex);
  }
}

const indexRoute = new IndexRoute();
export default indexRoute.router;
