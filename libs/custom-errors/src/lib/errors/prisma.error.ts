import { BaseError } from '../utils.internal';

export interface PrismaError extends BaseError {
  code: 'PrismaError';
}

export const PrismaError = (message: string): PrismaError => ({
  code: 'PrismaError',
  message,
});
