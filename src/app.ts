import dotenv from 'dotenv';
dotenv.config()
import express, { Application } from "express";
import path from "path";
import routes from "./routes/index";
import './database';

export default class App {
  public app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.router();
  }

  settings(): void {
    this.app.set("port", this.port || process.env.PORT || 3000);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(express.static(path.join(__dirname, "public")));
  }

  router(): void {
    this.app.use(routes);
  }

  listen(callback: Function = () => console.log(`Server listening on port ${this.app.get('port')}`)): void {
    this.app.listen(this.app.get("port"), callback());
  }
}
