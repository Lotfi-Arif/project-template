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

// Error mapping interface
interface IErrorMapping {
  [key: number]: string;
}

// Default error messages based on status code
const defaultMessages: IErrorMapping = {
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
export function handlePrismaError(error: unknown): never {
  // Check if the error is an instance of PrismaClientKnownRequestError
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Log the error in detail for debugging purposes.
    detailedLog(error);
    // Format the error message with the stack for more detailed feedback.
    const errorMessage = `${error.message}\nStack: ${error.stack}`;

    // Switch between known Prisma error codes to throw corresponding exceptions.
    switch (error.code) {
      // Unique constraint failed
      case 'P2002':
        throw new BadRequestException(
          `Unique constraint failed. ${errorMessage}`,
        );
      // Record not found
      case 'P2025':
        throw new NotFoundException(`Record not found. ${errorMessage}`);
      // Foreign key constraint failed
      case 'P2003':
        throw new ForbiddenException(
          `Foreign key constraint failed on the field. ${errorMessage}`,
        );
      // Value too long for column
      case 'P2000':
        throw new UnprocessableEntityException(
          `The provided value for the column is too long. ${errorMessage}`,
        );
      // No such table
      case 'P2021':
        throw new NotFoundException(
          `The table does not exist. ${errorMessage}`,
        );
      // No such column
      case 'P2022':
        throw new NotFoundException(
          `The column does not exist. ${errorMessage}`,
        );
      // Handle all other Prisma errors as internal server errors
      default:
        throw new InternalServerErrorException(
          `An internal server error occurred. ${errorMessage}`,
        );
    }
  } else {
    // If the error is not a Prisma error, log it and throw a generic internal server error.
    detailedLog(error);
    if (error instanceof Error) {
      throw new InternalServerErrorException(
        `An unexpected error occurred. Message: ${error.message}, Stack: ${error.stack}`,
      );
    } else {
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }
}

/**
 * Translates HTTP status codes into user-friendly error messages for GraphQL responses.
 * @param statusCode - The HTTP status code.
 * @param detail - Additional details about the error.
 * @returns {GraphQLError} - A GraphQLError with a formatted message and extensions including the HTTP status code.
 */
export function handleHttpError(error: Error): GraphQLError {
  const errorName = error.constructor.name;
  const statusCode = ERROR_TO_STATUS_CODE[errorName] || 500;
  const message =
    error.message ||
    defaultMessages[statusCode] ||
    'An unexpected error occurred.';

  // Return a GraphQLError with the message and extensions that include the status code.
  return new GraphQLError(message, {
    extensions: {
      code: `HTTP_${statusCode}`,
      statusCode,
      detail: error.stack,
    },
  });
}
