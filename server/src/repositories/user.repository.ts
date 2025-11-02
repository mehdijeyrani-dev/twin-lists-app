import { UserModel } from "../models/user.model";
import { IUser } from "../types/user.types";
import { BaseRepository } from "./base/base.repository";

export class UserRepository extends BaseRepository<IUser> {
  /**
   * Finds a user by email.
   * @param email - The email of the user to find.
   * @returns A promise that resolves to the found user or null.
   */
  async findByEmail(email: string): Promise<IUser | null> {
    return this.handleAsyncOperation(
      async () => UserModel.findOne({ email }),
      "find user by email"
    );
  }

  /**
   * Find a user by ID.
   * @param id - The ID of the user to find.
   * @returns A promise that resolves to the found user or null.
   */
  async findById(id: string): Promise<IUser | null> {
    return this.handleAsyncOperation(
      async () => await UserModel.findById(id),
      "find user by ID"
    );
  }

  /**
   * Retrieves all users, sorted by creation date in descending order.
   * @returns A promise that resolves to an array of users.
   */
  async getAllUsers(): Promise<IUser[]> {
    return this.handleAsyncOperation(
      async () => UserModel.find().sort({ createdAt: -1 }),
      "get all users"
    );
  }

  /**
   * Creates a new user.
   * @param userData - The data of the user to create.
   * @returns A promise that resolves to the created user.
   */
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    return this.handleAsyncOperation(async () => {
      const user = new UserModel(userData);
      return user.save();
    }, "create new user");
  }

  /**
   * Updates an existing user.
   * @param id - The ID of the user to update.
   * @param updateData - The data to update.
   * @returns A promise that resolves to the updated user or null.
   */
  async updateUser(
    id: string,
    updateData: Partial<IUser>
  ): Promise<IUser | null> {
    return this.handleAsyncOperation(
      async () => UserModel.findByIdAndUpdate(id, updateData, { new: true }),
      "update user"
    );
  }

  /**
   * Deletes a user by ID.
   * @param id - The ID of the user to delete.
   * @returns A promise that resolves to the deleted user or null.
   */
  async deleteUser(id: string): Promise<IUser | null> {
    return this.handleAsyncOperation(
      async () => UserModel.findByIdAndDelete(id),
      "delete user"
    );
  }
}
