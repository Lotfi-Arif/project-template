import { BaseError } from '../utils.internal';

export interface EventBusError extends BaseError {
  code: 'EventBusError';
}

export const EventBusError = (message: string): EventBusError => ({
  code: 'EventBusError',
  message,
});
