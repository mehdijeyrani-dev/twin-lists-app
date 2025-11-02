import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error(`Error: ${err.message}`);
  res.status(500).json({ message: "Internal Server Error" });
};
