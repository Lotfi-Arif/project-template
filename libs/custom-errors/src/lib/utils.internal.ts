// Do not use these types outside of this library
// it is only here as an internal utility function
// to create errors from.

/**
 * "Internal" type to be extended
 * do not use outside this library
 */
export type BaseError = {
  error?: unknown;
  code: string;
  message: string;
};
