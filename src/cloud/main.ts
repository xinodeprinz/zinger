import Parse from "parse";

Parse.Cloud.define("health", async (request) => {
  console.log("This is the health request: ", request);
  return "Parse server is running successfully";
});
