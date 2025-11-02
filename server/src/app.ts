import express, { Application, json, urlencoded } from "express";
import authRouter from "./routes/auth.routes";
import cors from "cors";

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.configureRoutes();
    this.configureErrorHandling();
  }

  private configureMiddlewares(): void {
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(cors());
    // this.app.use(helmet());
    // this.app.use(morgan("dev"));
  }

  private configureRoutes(): void {
    this.app.use("/api/auth", authRouter);
  }

  private configureErrorHandling(): void {
    // this.app.use(notFoundHandler);
    // this.app.use(errorHandler);
  }

  public getApp(): Application {
    return this.app;
  }
}
