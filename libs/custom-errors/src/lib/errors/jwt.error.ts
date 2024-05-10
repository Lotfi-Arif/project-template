import { BaseError } from '../utils.internal';

export interface JwtError extends BaseError {
  code: 'JWTError';
}

export const JwtError = (message: string): JwtError => ({
  code: 'JWTError',
  message,
});
