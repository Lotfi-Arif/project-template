import { CustomError } from './custom-errors';

// TODO: convert this to a TSrest http code response
export const getResponseStatus = (error: CustomError) => {
  switch (error.code) {
    case 'InternalServerError':
    case 'NonExistentEntityError':
    case 'BrokenEntityError':
    case 'PrismaClientError':
    case 'ThirdPartyClientError':
    case 'InternalApiClientError':
      return 500 as const;
    case 'BadRequestError':
      return 400 as const;
    case 'UnauthorizedError':
      return 401 as const;
    case 'ForbiddenError':
      return 403 as const;
    case 'NotFoundError':
      return 404 as const;
    case 'NonExistentMethodOrServiceError':
      return 422 as const;
    default:
      return 500 as const;
  }
};

export const getResponseStatusBrick = (error: CustomError) => {
  if (
    error.code in
    [
      'InternalServerError',
      'NonExistentEntityError',
      'BrokenEntityError',
      'PrismaClientError',
      'ThirdPartyClientError',
      'InternalApiClientError',
    ]
  ) {
    return 500 as const;
  }
  if (error.code in ['BadRequestError']) {
    return 400 as const;
  }
  if (error.code in ['UnauthorizedError']) {
    return 401 as const;
  }
  if (error.code in ['ForbiddenError']) {
    return 403 as const;
  }
  if (error.code in ['NotFoundError']) {
    return 404 as const;
  }
  return 500 as const;
};
