import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../types/user.types";
import bcrypt from "bcryptjs";

export class AuthService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository = new UserRepository()) {
    this.userRepository = userRepository;
  }

  /**
   * Logs in a user by their email and password.
   * @param email - The email of the user.
   * @param password - The password of the user.
   * @returns A promise resolving to the user and a token.
   * @throws Error if email or password is invalid.
   */
  async loginUser(
    email: string,
    password: string
  ): Promise<{ user: IUser; token: string }> {
    if (!email || !password)
      throw new Error("Email and password are required.");

    // Await repository call directly
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error("Invalid email or password.");

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid email or password.");

    // TODO: Replace with real JWT in production
    const token = "dummy-token";

    return { user, token };
  }

  /**
   * Registers a new user.
   * @param userData - The data of the user to register.
   * @returns A promise resolving to the created user and a token.
   * @throws Error if email is already in use or input is invalid.
   */
  async registerUser(
    userData: Partial<IUser>
  ): Promise<{ user: IUser; token: string }> {
    if (!userData.email || !userData.password) {
      throw new Error("Email and password are required.");
    }

    // Check if user already exists
    const existingUser = await this.userRepository.findByEmail(userData.email!);
    if (existingUser) {
      throw new Error("User with this email already exists.");
    }

    // Create new user
    const user = await this.userRepository.createUser(userData);

    const token = "dummy-token";

    return { user, token };
  }
}
