/**
 * Function to convert anythin error-like to one of our custom errors.
 * Example: (error) => toCustomError(JwtError)(error)
 * And can be simplified as toCustomError(JwtError)
 */
export const toCustomError =
  <T>(errorWrapper: (message: string) => T) =>
  (error: unknown) => {
    if (error instanceof Error) {
      return errorWrapper(error.message);
    }
    if (typeof error === 'string') {
      return errorWrapper(error);
    }

    if (typeof error === 'object' && error !== null) {
      const { name, message } = error as { name: string; message: string };
      return errorWrapper(`${name}: ${message}`);
    }

    return errorWrapper(`Unknown error happened (${errorWrapper.name})`);
  };
