import { z } from 'zod';
import type { HttpError } from './error-schemas';

export const withErrorEnvelope = <T extends z.AnyZodObject>(errorSchema: T) =>
  z.object({
    data: z.null(),
    message: z.string(),
    error: errorSchema,
  });

export const withDataEnvelope = <T extends z.ZodSchema>(dataSchema: T) =>
  z.object({
    data: dataSchema,
    message: z.string(),
    error: z.null(),
  });

export type TErrorBody = {
  data: null;
  message: string;
  error: {
    code: string;
  };
};

export const httpError = (statusCode: number, message: string): HttpError => {
  if (statusCode === 400) {
    return {
      data: null,
      message,
      error: {
        code: 'BadRequestError',
      },
    };
  }

  if (statusCode === 401) {
    return {
      data: null,
      message,
      error: {
        code: 'UnauthorizedError',
      },
    };
  }

  if (statusCode === 403) {
    return {
      data: null,
      message,
      error: {
        code: 'ForbiddenError',
      },
    };
  }

  if (statusCode === 404) {
    return {
      data: null,
      message,
      error: {
        code: 'NotFoundError',
      },
    };
  }

  if (statusCode === 422) {
    return {
      data: null,
      message,
      error: {
        code: 'UnprocessableContent',
      },
    };
  }

  return {
    data: null,
    message,
    error: {
      code: 'InternalServerError',
    },
  };
};
