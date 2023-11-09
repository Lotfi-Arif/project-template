import util from 'util';
import {
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
  ForbiddenException,
  UnprocessableEntityException,
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

// Error to HTTP status code mapping
const ERROR_TO_STATUS_CODE: { [key: string]: number } = {
  BadRequestException: 400,
  UnauthorizedException: 401,
  ForbiddenException: 403,
  NotFoundException: 404,
  ConflictException: 409,
  UnprocessableEntityException: 422,
  InternalServerErrorException: 500,
};

const PRISMA_ERROR_TO_HTTP_EXCEPTION: Record<
  string,
  typeof InternalServerErrorException
> = {
  P2002: BadRequestException,
  P2025: NotFoundException,
  P2003: ForbiddenException,
  P2000: UnprocessableEntityException,
  P2021: NotFoundException,
  P2022: NotFoundException,
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

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

/**
 * Handles known Prisma client errors by throwing appropriate HTTP exceptions.
 * @param error - The error to handle.
 * @throws {HttpException} - The corresponding HTTP exception based on the Prisma error code.
 */
export function handlePrismaError(
  error: unknown,
  defaultMessage: string = 'An unexpected error occurred.',
) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const HttpException =
      PRISMA_ERROR_TO_HTTP_EXCEPTION[error.code] ||
      InternalServerErrorException;
    throw new HttpException(`${defaultMessage}: ${error.message}`);
  } else if (error instanceof Error) {
    throw new InternalServerErrorException(
      `${defaultMessage}: ${error.message}`,
    );
  } else {
    throw new InternalServerErrorException(defaultMessage);
  }
}

/**
 * Translates HTTP status codes into user-friendly error messages for GraphQL responses.
 * @param statusCode - The HTTP status code.
 * @param detail - Additional details about the error.
 * @returns {GraphQLError} - A GraphQLError with a formatted message and extensions including the HTTP status code.
 */
export function handleHttpError(
  error: Error,
  defaultMessage: string = 'An unexpected error occurred.',
): GraphQLError {
  // Get the name of the error's constructor as a string.
  const errorName = error.constructor.name;

  // Map the error name to a status code, defaulting to 500 if not found.
  const statusCode = ERROR_TO_STATUS_CODE[errorName] || 500;

  // Use the provided defaultMessage or get the default message for the status code.
  const message =
    defaultMessage ||
    defaultMessages[statusCode] ||
    'An unexpected error occurred.';

  // Return a GraphQLError with the message and extensions that include the status code and details.
  return new GraphQLError(message, {
    extensions: {
      code: `HTTP_${statusCode}`,
      statusCode,
      detail: `${error.name} - ${error.message} - ${error.stack}`,
    },
  });
}
