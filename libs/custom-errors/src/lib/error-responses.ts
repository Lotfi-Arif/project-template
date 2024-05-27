import { CustomError } from './custom-errors';

export const createErrorEnvelope = <Code extends string, Status extends number>(
  status: Status,
  code: Code,
  message: string,
) => ({
  status,
  body: {
    message,
    error: {
      code,
    },
    data: null,
  },
});

export const internalServerError = (message: string) =>
  createErrorEnvelope(500, 'InternalServerError', message);

export const unprocessableContentError = (message: string) =>
  createErrorEnvelope(422, 'UnprocessableContent', message);

export const notFoundError = (message: string) =>
  createErrorEnvelope(404, 'NotFoundError', message);

export const forbiddenError = (message: string) =>
  createErrorEnvelope(403, 'ForbiddenError', message);

export const unauthorizedError = (message: string) =>
  createErrorEnvelope(401, 'UnauthorizedError', message);

export const badRequestError = (message: string) =>
  createErrorEnvelope(400, 'BadRequestError', message);

export const httpCustomError = (error: CustomError) => {
  if (
    ['NonExistentEntityError', 'AlreadyExistentEntityError'].includes(
      error.code,
    )
  ) {
    return unprocessableContentError(error.message);
  }
  if (error.code === 'NotFoundError') {
    return notFoundError(error.message);
  }
  if (error.code === 'ForbiddenError') {
    return forbiddenError(error.message);
  }
  if (error.code === 'UnauthorizedError') {
    return unauthorizedError(error.message);
  }
  if (error.code === 'BadRequestError') {
    return badRequestError(error.message);
  }
  return internalServerError('InternalServerError');
};
