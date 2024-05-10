import { CustomError } from './custom-errors';

export const getResponseCode = (error: CustomError): string => {
  switch (error.code) {
    case 'BadRequestError':
    case 'NonExistentMethodOrServiceError':
      return 'BadRequestError' as const;
    case 'UnauthorizedError':
      return 'UnauthorizedError' as const;
    case 'ForbiddenError':
      return 'ForbiddenError' as const;
    case 'NotFoundError':
    case 'NonExistentEntityError':
      return 'NotFoundError' as const;
    case 'InternalServerError':
    case 'BrokenEntityError':
    case 'PrismaClientError':
    case 'ThirdPartyClientError':
    case 'InternalApiClientError':
      return 'InternalServerError' as const;
    default:
      throw new Error('Unhandled http status');
  }
};
