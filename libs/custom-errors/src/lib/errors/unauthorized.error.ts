import { BaseError } from '../utils.internal';

export type UnauthorizedError = BaseError & {
  code: 'UnauthorizedError';
};

export const UnauthorizedError = (
  message: string,
  error?: Error,
): UnauthorizedError => ({
  code: 'UnauthorizedError',
  message,
  error,
});
