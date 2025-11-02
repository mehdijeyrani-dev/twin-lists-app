import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();
const authController = new AuthController();

// Define routes
router.post("/login", (req, res) => authController.login(req, res));
router.post("/register", (req, res) => authController.register(req, res));

export default router;
