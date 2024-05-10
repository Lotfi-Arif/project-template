import { BaseError } from '../utils.internal';

export type AlreadyExistentEntityError = BaseError & {
  code: 'AlreadyExistentEntityError';
};

export const AlreadyExistentEntityError = (
  message: string,
  error?: Error,
): AlreadyExistentEntityError => ({
  code: 'AlreadyExistentEntityError',
  message,
  error,
});
