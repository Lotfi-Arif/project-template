import { BaseError } from '../utils.internal';

export type ThirdPartyClientError = BaseError & {
  code: 'ThirdPartyClientError' | 'ThirdPartyClientAccessTokenError';
  error?: Error;
};

export const ThirdPartyClientError = (
  message: string,
  error?: Error,
): ThirdPartyClientError => ({
  code: 'ThirdPartyClientError',
  message,
  error,
});

export const ThirdPartyClientAccessTokenError = (
  message: string,
  error?: Error,
): ThirdPartyClientError => ({
  code: 'ThirdPartyClientAccessTokenError',
  message,
  error,
});
