import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { IUser } from "../types/user.types";

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService = new AuthService()) {
    this.authService = authService;
  }

  /**
   * Handles user login.
   * @param req - Express request object.
   * @param res - Express response object.
   */
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const { user, token } = await this.authService.loginUser(email, password);
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(401).json({
        message: error instanceof Error ? error.message : "Login failed.",
      });
    }
  }

  /**
   * Handles user registration.
   * @param req - Express request object.
   * @param res - Express response object.
   */
  async register(req: Request, res: Response): Promise<void> {
    try {
      const userData: Partial<IUser> = req.body;
      const { user, token } = await this.authService.registerUser(userData);
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).json({
        message:
          error instanceof Error ? error.message : "Registration failed.",
      });
    }
  }
}
