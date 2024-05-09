import { BaseError } from '../utils.internal';

export interface HeadersHttpError extends BaseError {
  code: 'HeadersHttpError';
}

export const HeadersHttpError = (message: string): HeadersHttpError => ({
  code: 'HeadersHttpError',
  message,
});
