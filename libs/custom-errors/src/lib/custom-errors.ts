import {
  AlreadyExistentEntityError,
  BadRequestError,
  BrokenEntityError,
  EventBusError,
  ForbiddenError,
  InternalApiClientError,
  InternalServerError,
  NonExistentEntityError,
  NonExistentMethodOrServiceError,
  NotFoundError,
  PrismaClientError,
  ThirdPartyClientError,
  UnauthorizedError,
} from './errors';
import { BaseError } from './utils.internal';

export type CustomError =
  | NonExistentMethodOrServiceError
  | NonExistentEntityError
  | AlreadyExistentEntityError
  | BrokenEntityError
  | PrismaClientError
  | ThirdPartyClientError
  | InternalApiClientError
  | BadRequestError
  | UnauthorizedError
  | ForbiddenError
  | NotFoundError
  | InternalServerError
  | EventBusError;

export const errorToString = (error: BaseError) =>
  `${error.code}: ${error.message}`;
