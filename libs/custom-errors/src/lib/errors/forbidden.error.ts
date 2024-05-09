import { BaseError } from '../utils.internal';

export type ForbiddenError = BaseError & {
  code: 'ForbiddenError';
};

export const ForbiddenError = (
  message: string,
  error?: Error,
): ForbiddenError => ({
  code: 'ForbiddenError',
  message,
  error,
});
