import { App } from "./app";
import { dbConnect } from "./config/db";
import { logger } from "./utils/logger";

const app = new App().getApp();
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, async () => {
  await dbConnect();
  logger.info(`Server running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error) => {
  logger.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on("uncaughtException", (err: Error) => {
  logger.error(`Uncaught Exception: ${err.message}`);
  server.close(() => process.exit(1));
});

// Graceful shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    logger.info("Server closed.");
    process.exit(0);
  });
});
