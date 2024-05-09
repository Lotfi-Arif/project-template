import { BaseError } from '../utils.internal';

export type BrokenEntityError = BaseError & {
  code: 'BrokenEntityError';
};

export const BrokenEntityError = (
  message: string,
  error?: Error,
): BrokenEntityError => ({
  code: 'BrokenEntityError',
  message,
  error,
});
