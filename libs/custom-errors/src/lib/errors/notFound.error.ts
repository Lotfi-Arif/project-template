import { BaseError } from '../utils.internal';

export type NotFoundError = BaseError & {
  code: 'NotFoundError';
};

export const NotFoundError = (
  message: string,
  error?: Error,
): NotFoundError => ({
  code: 'NotFoundError',
  message,
  error,
});
