import { BaseError } from '../utils.internal';

export interface InternalError extends BaseError {
  code: 'InternalError';
}

export const InternalError = (message: string): InternalError => ({
  code: 'InternalError',
  message,
});

export type InternalServerError = BaseError & {
  code: 'InternalServerError';
};

export const InternalServerError = (
  message: string,
  error?: Error,
): InternalServerError => ({
  code: 'InternalServerError',
  message,
  error,
});
