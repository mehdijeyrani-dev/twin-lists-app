/**
 * BaseRepository
 * Provides common utility methods for all repositories.
 */
export abstract class BaseRepository<T> {
  /**
   * Handles async operations with consistent error handling.
   * @param operation - The async operation to perform.
   * @param operationName - The name of the operation for error messages.
   * @returns A promise with the operation result.
   */
  protected async handleAsyncOperation<T>(
    operation: () => Promise<T>,
    actionName: string
  ): Promise<T> {
    try {
      return await operation();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to ${actionName}: ${errorMessage}`);
    }
  }
}
