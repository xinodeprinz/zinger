declare module "parse-server" {
  import { Application } from "express";

  interface ParseServerOptions {
    databaseURI: string;
    cloud?: string;
    appId: string;
    masterKey: string;
    serverURL: string;
    [key: string]: any;
  }

  export class ParseServer {
    constructor(options: ParseServerOptions);
    app: Application; // Add the app attribute
    static createLiveQueryServer(httpServer: any): void;
    start: () => Promise<void>;
  }

  export function ParseDashboard(
    config: any,
    allowInsecureHTTP: boolean
  ): Application;
}
