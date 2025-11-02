import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../types/user.types";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository = new UserRepository()) {
    this.userRepository = userRepository;
  }

  /**
   * Retrieves a user by their email.
   * @param email - The email of the user to retrieve.
   * @returns A promise that resolves to the user or null if not found.
   * @throws {Error} If an error occurs during the operation.
   */
  async getUserByEmail(email: string): Promise<IUser | null> {
    if (!email) throw new Error("Email is required.");

    return this.userRepository.findByEmail(email);
  }
}
