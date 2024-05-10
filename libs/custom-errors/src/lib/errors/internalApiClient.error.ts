import { BaseError } from '../utils.internal';

export type InternalApiClientError = BaseError & {
  code: 'InternalApiClientError';
  statusCode: number;
};

export const InternalApiClientError = (
  message: string,
  statusCode: number,
  error?: Error,
): InternalApiClientError => ({
  code: 'InternalApiClientError',
  message,
  statusCode,
  error,
});
