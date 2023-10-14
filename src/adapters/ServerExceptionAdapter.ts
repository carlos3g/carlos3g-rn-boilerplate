import { BaseServerException } from '@app/types';

/**
 * Adapter class for transforming server exceptions into user-friendly messages.
 */
export class ServerExceptionAdapter {
  /**
   * Transforms a server exception into a user-friendly message.
   * @param args - An object containing the error and a fallback message.
   * @param args.error - The server exception to transform.
   * @param args.fallbackMessage - The fallback message to use if the error doesn't have a message.
   * @returns The error message or the fallback message.
   */
  static transform(args: { error?: BaseServerException; fallbackMessage: string }) {
    return args.error?.message || args.fallbackMessage;
  }
}
