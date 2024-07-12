import express from "express";
import { ParseServer } from "parse-server";
import "dotenv/config";
import env from "./configs/env";

const app = express();

const api = new ParseServer({
  databaseURI: env.DATABASE_URI,
  cloud: env.CLOUD,
  appId: env.APP_ID,
  masterKey: env.MASTER_KEY,
  serverURL: `http://${env.HOST}:${env.PORT}/parse`,
});

app.use("/parse", api.app);

app.listen(env.PORT, () => {
  console.log(`Parse Server running on http://${env.HOST}:${env.PORT}/parse`);
});
