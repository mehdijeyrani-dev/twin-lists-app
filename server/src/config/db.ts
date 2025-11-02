import mongoose from "mongoose";
import { logger } from "../utils/logger";

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/twin_lists_db";

let connection: typeof mongoose;

export const dbConnect = async (): Promise<typeof mongoose> => {
  if (connection) {
    return connection;
  }

  try {
    connection = await mongoose.connect(MONGO_URI);
    logger.info("MongoDB connected successfully");
    return connection;
  } catch (error) {
    const err = error as Error;
    logger.error(`MongoDB connection error: ${err.message}`);
    throw err;
  }
};

export const dbDisconnect = async (): Promise<void> => {
  if (!connection) {
    return;
  }

  await mongoose.disconnect();
  logger.info("MongoDB disconnected");
};
