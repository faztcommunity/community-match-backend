import { Router } from "express";
import indexRoute from "./index/index.route";

class Routes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.use("/", indexRoute);
  }
}

const routes = new Routes();
export default routes.router;
