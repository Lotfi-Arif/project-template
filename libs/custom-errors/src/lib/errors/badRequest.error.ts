import { BaseError } from '../utils.internal';

export type BadRequestError = BaseError & {
  code: 'BadRequestError';
};

export const BadRequestError = (
  message: string,
  error?: Error,
): BadRequestError => ({
  code: 'BadRequestError',
  message,
  error,
});
