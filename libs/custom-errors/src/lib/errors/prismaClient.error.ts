import { BaseError } from '../utils.internal';

export type PrismaClientError = BaseError & {
  code: 'PrismaClientError';
};

export const PrismaClientError = (
  message: string,
  error?: Error,
): PrismaClientError => ({
  code: 'PrismaClientError',
  message,
  error,
});
