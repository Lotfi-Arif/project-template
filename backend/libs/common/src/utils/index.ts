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
export function handleHttpError(statusCode: number, detail = ''): GraphQLError {
  let message: string;
  switch (statusCode) {
    case 400:
      message = 'Bad request.';
      break;
    case 401:
      message = 'Authentication failed.';
      break;
    case 403:
      message = 'Access forbidden.';
      break;
    case 404:
      message = 'The requested resource was not found.';
      break;
    case 409:
      message =
        'Conflict occurred with the current state of the target resource.';
      break;
    case 422:
      message =
        'Unprocessable entity. The server understands the content type and syntax of the request but was unable to process the contained instructions.';
      break;
    case 500:
      message =
        'Internal server error. An unexpected condition was encountered.';
      break;
    default:
      message = 'An error occurred.';
      break;
  }

  // Append additional details if provided.
  if (detail) {
    message += ` ${detail}`;
  }

  // Return a GraphQLError with the message and extensions that include the status code.
  return new GraphQLError(message, {
    extensions: {
      code: `HTTP_${statusCode}`,
      statusCode,
      detail,
    },
  });
}
