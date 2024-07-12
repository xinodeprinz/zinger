import { ENV } from "env";

const { DATABASE_URI, APP_ID, MASTER_KEY, PORT, HOST, CLOUD } = process.env;

const env: ENV = {
  DATABASE_URI: <string>DATABASE_URI,
  APP_ID: <string>APP_ID,
  MASTER_KEY: <string>MASTER_KEY,
  PORT: parseInt(<string>PORT),
  HOST: <string>HOST,
  CLOUD: <string>CLOUD,
};

export default env;
