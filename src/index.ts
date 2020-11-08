import { App } from "./app";
import { Database } from "./database";

async function main() {
  const database = new Database();
  const app = new App();
  database.connect();
  await app.listen();
}

main();
