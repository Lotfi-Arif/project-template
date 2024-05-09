import { BaseError } from '../utils.internal';

export type NonExistentMethodOrServiceError = BaseError & {
  code: 'NonExistentMethodOrServiceError';
};

export const NonExistentMethodOrServiceError = (
  message: string,
  error?: Error,
): NonExistentMethodOrServiceError => ({
  code: 'NonExistentMethodOrServiceError',
  message,
  error,
});

export type NonExistentEntityError = BaseError & {
  code: 'NonExistentEntityError';
};

export const NonExistentEntityError = (
  message: string,
  error?: Error,
): NonExistentEntityError => ({
  code: 'NonExistentEntityError',
  message,
  error,
});
