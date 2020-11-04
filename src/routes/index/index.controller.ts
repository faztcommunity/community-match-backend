import { Response, Request } from "express";
const pkg = require("../../../package.json");

class IndexController {
  async getIndex(req: Request, res: Response): Promise<Response> {
    return res.json({
      name: pkg.name,
      description: pkg.description,
      version: pkg.version,
      author: pkg.author,
    });
  }
}

export const indexController = new IndexController();
