import express from "express";
import { ParseServer } from "parse-server";

const app = express();

const api = new ParseServer({
  databaseURI: "mongodb://localhost:27017/crud",
  cloud: "./cloud/main.js",
  appId: "crud",
  masterKey: "crud",
  serverURL: "http://localhost:1337/parse",
});

app.use("/parse", api.app);

app.listen(1337, () => {
  console.log("Parse Server running on http://localhost:1337/parse");
});
