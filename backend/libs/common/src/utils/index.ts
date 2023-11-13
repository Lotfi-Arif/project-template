import util from 'util';
import {
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
  ForbiddenException,
  UnprocessableEntityException,
  HttpException,
  ConflictException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { GraphQLError } from 'graphql';

// Default error messages based on status code
const defaultMessages: Record<number, string> = {
  400: 'Bad request.',
  401: 'Authentication failed.',
  403: 'Access forbidden.',
  404: 'The requested resource was not found.',
  409: 'Conflict occurred with the current state of the target resource.',
  422: 'Unprocessable entity. The server understands the content type and syntax of the request but was unable to process the contained instructions.',
  500: 'Internal server error. An unexpected condition was encountered.',
};

// Maps error constructor names to corresponding HTTP status codes
const ERROR_TO_STATUS_CODE: { [key: string]: number } = {
  BadRequestException: 400,
  UnauthorizedException: 401,
  ForbiddenException: 403,
  NotFoundException: 404,
  ConflictException: 409,
  UnprocessableEntityException: 422,
  InternalServerErrorException: 500,
};

/**
 * Creates a GraphQLError with specified status code, message, and error details.
 * @param statusCode {number} - The HTTP status code associated with the error.
 * @param message {string} - The message describing the error.
 * @param error {Error} - The original error object.
 * @returns {GraphQLError} - The constructed GraphQLError with detailed information.
 */
const createGraphQLError = (
  statusCode: number,
  message: string,
  error: Error,
): GraphQLError => {
  return new GraphQLError(message, {
    extensions: {
      code: `HTTP_${statusCode}`,
      statusCode,
      detail: `${error.name} - ${error.message} - ${error.stack}`,
    },
  });
};

/**
 * Creates an instance of a specified HttpException subclass with a given message.
 * @param errorClass {new (message: string) => HttpException} - The HttpException subclass constructor.
 * @param message {string} - The message to be passed to the HttpException.
 * @returns {HttpException} - The instantiated HttpException object.
 */
const createHttpException = (
  errorClass: new (message: string) => HttpException,
  message: string,
): HttpException => {
  return new errorClass(message);
};

// Maps Prisma error codes to functions that create corresponding HttpExceptions
const PRISMA_ERROR_TO_HTTP_EXCEPTION: Record<
  string,
  (message: string) => HttpException
> = {
  P2002: (message) => createHttpException(ConflictException, message), // Unique constraint failed
  P2025: (message) => createHttpException(NotFoundException, message), // Record not found
  P2003: (message) => createHttpException(ForbiddenException, message), // Foreign key constraint failed
  P2000: (message) => createHttpException(BadRequestException, message), // Requested record not found
  P2021: (message) => createHttpException(BadRequestException, message), // Invalid data sent
  P2022: (message) =>
    createHttpException(UnprocessableEntityException, message), // Data validation error
  P2016: (message) => createHttpException(ForbiddenException, message), // Record would violate a required constraint
};

// Maps error constructor names to functions that create corresponding GraphQLErrors
const ERROR_TO_GRAPHQL_ERROR: Record<
  string,
  (error: Error, defaultMessage: string) => GraphQLError
> = {
  BadRequestException: (error, defaultMessage) =>
    createGraphQLError(400, defaultMessage || 'Bad request', error),
  UnauthorizedException: (error, defaultMessage) =>
    createGraphQLError(401, defaultMessage || 'Unauthorized', error),
  ForbiddenException: (error, defaultMessage) =>
    createGraphQLError(403, defaultMessage || 'Forbidden', error),
  NotFoundException: (error, defaultMessage) =>
    createGraphQLError(404, defaultMessage || 'Not Found', error),
  ConflictException: (error, defaultMessage) =>
    createGraphQLError(409, defaultMessage || 'Conflict', error),
  UnprocessableEntityException: (error, defaultMessage) =>
    createGraphQLError(422, defaultMessage || 'Unprocessable Entity', error),
  InternalServerErrorException: (error, defaultMessage) =>
    createGraphQLError(500, defaultMessage || 'Internal Server Error', error),
  // Add more mappings as needed
};

/**
 * Logs detailed information about the provided data using the `util.inspect` method.
 * @param data - The data to log.
 */
export const detailedLog = (data: unknown): void => {
  console.log(
    util.inspect(data, { showHidden: false, depth: null, colors: true }),
  );
};

// Utility functions for manipulating string cases
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function lowerFirstLetter(string: string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

/**
 * Handles known Prisma client errors by throwing appropriate HTTP exceptions.
 * If the error is a recognized Prisma error, it maps to a specific HTTP exception.
 * Otherwise, it defaults to throwing an InternalServerErrorException.
 * @param error - The error to handle.
 * @param contextMessage - A message providing context about where the error occurred.
 * @throws {HttpException} - The corresponding HTTP exception based on the Prisma error code.
 */
export function handlePrismaError(
  error: unknown,
  contextMessage: string = 'An error occurred.',
) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const createException =
      PRISMA_ERROR_TO_HTTP_EXCEPTION[error.code] ||
      (() => new InternalServerErrorException(contextMessage));
    throw createException(`${contextMessage}: ${error.message}`);
  } else if (error instanceof Error) {
    throw new InternalServerErrorException(
      `${contextMessage}: ${error.message}`,
    );
  } else {
    throw new InternalServerErrorException(contextMessage);
  }
}

/**
 * Translates different error types into user-friendly GraphQL error messages.
 * If the error type is recognized, it maps to a specific GraphQLError with a status code and detailed message.
 * Otherwise, it defaults to a GraphQLError with status code 500 (Internal Server Error).
 * @param error - The error to translate.
 * @param defaultMessage - A default message to use if none is provided based on the status code.
 * @returns {GraphQLError} - A GraphQLError with a formatted message and additional details.
 */
export function handleHttpError(
  error: Error,
  defaultMessage: string = 'An unexpected error occurred.',
): GraphQLError {
  const errorName = error.constructor.name;
  const createError =
    ERROR_TO_GRAPHQL_ERROR[errorName] ||
    ((error, defaultMessage) => createGraphQLError(500, defaultMessage, error));
  return createError(
    error,
    defaultMessage || defaultMessages[ERROR_TO_STATUS_CODE[errorName] || 500],
  );
}
