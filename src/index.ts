import express from "express";
import { ParseServer } from "parse-server";
import "dotenv/config";
import env from "./configs/env";
import schemas from "./migrations";

const app = express();

console.log(`========== ${env.DATABASE_URI} ==========`);

const api = new ParseServer({
  databaseURI: env.DATABASE_URI,
  cloud: env.CLOUD,
  appId: env.APP_ID,
  masterKey: env.MASTER_KEY,
  serverURL: `http://${env.HOST}:${env.PORT}/parse`,
});

api.start().then(() => {
  schemas.forEach(async (schema) => {
    try {
      await schema.save();
    } catch (error) {
      console.log("=== A migration error occurred ===");
    }
  });
});

app.use("/parse", api.app);

app.listen(env.PORT, () => {
  console.log(`Parse Server running on http://${env.HOST}:${env.PORT}/parse`);
});
