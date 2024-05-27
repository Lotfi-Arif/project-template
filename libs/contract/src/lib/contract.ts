// This code defines an API contract using @ts-rest/core to streamline client-server communication.
// It structures the contract with endpoints for user operations (create, register, getAll, getOne, update, delete).
// Each endpoint specifies HTTP method, URL path, expected request bodies, path parameters, and possible response schemas.
// The zod library ensures type-safe validation for input/output data, and custom error schemas manage standardized error handling.
// This approach allows automatic API documentation, consistent data validation, and enhanced developer productivity.
import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import {
  BadRequestErrorSchema,
  ForbiddenErrorSchema,
  InternalServerErrorSchema,
  NotFoundErrorSchema,
  UnauthorizedErrorSchema,
  UnprocessableContentErrorSchema,
} from '@tradetrove/custom-errors';

const Contract = initContract();

export const ApiContractV1 = Contract.router({
  user: {
    create: {
      method: 'POST',
      path: '/',
      body: z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      }),
      responses: {
        201: z.object({
          id: z.string(),
          name: z.string(),
          email: z.string(),
        }),
        400: BadRequestErrorSchema,
        401: UnauthorizedErrorSchema,
        403: ForbiddenErrorSchema,
        404: NotFoundErrorSchema,
        422: UnprocessableContentErrorSchema,
        500: InternalServerErrorSchema,
      },
      summary: 'Create a user',
    },
    register: {
      method: 'POST',
      path: '/register',
      body: z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      }),
      responses: {
        201: z.object({
          id: z.string(),
          name: z.string(),
          email: z.string(),
        }),
        400: BadRequestErrorSchema,
        401: UnauthorizedErrorSchema,
        403: ForbiddenErrorSchema,
        404: NotFoundErrorSchema,
        422: UnprocessableContentErrorSchema,
        500: InternalServerErrorSchema,
      },
      summary: 'Register a user',
    },
    getAll: {
      method: 'GET',
      path: '/',
      responses: {
        200: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            email: z.string(),
          }),
        ),
        400: BadRequestErrorSchema,
        401: UnauthorizedErrorSchema,
        403: ForbiddenErrorSchema,
        404: NotFoundErrorSchema,
        500: InternalServerErrorSchema,
      },
      summary: 'Get all users',
    },
    getOne: {
      method: 'GET',
      path: '/:id',
      pathParams: z.object({
        id: z.string(),
      }),
      responses: {
        200: z.object({
          id: z.string(),
          name: z.string(),
          email: z.string(),
        }),
        400: BadRequestErrorSchema,
        401: UnauthorizedErrorSchema,
        403: ForbiddenErrorSchema,
        404: NotFoundErrorSchema,
        500: InternalServerErrorSchema,
      },
      summary: 'Get a user by id',
    },
    update: {
      method: 'PATCH',
      path: '/:id',
      pathParams: z.object({
        id: z.string(),
      }),
      body: z.object({
        name: z.string(),
        email: z.string(),
      }),
      responses: {
        200: z.object({
          id: z.string(),
          name: z.string(),
          email: z.string(),
        }),
        400: BadRequestErrorSchema,
        401: UnauthorizedErrorSchema,
        403: ForbiddenErrorSchema,
        404: NotFoundErrorSchema,
        422: UnprocessableContentErrorSchema,
        500: InternalServerErrorSchema,
      },
      summary: 'Update a user by id',
    },
    deleteUser: {
      method: 'DELETE',
      path: '/:id',
      pathParams: z.object({
        id: z.string(),
      }),
      body: z.object({}),
      responses: {
        204: z.object({}),
        400: BadRequestErrorSchema,
        401: UnauthorizedErrorSchema,
        403: ForbiddenErrorSchema,
        404: NotFoundErrorSchema,
        500: InternalServerErrorSchema,
      },
      summary: 'Delete a user by id',
    },
  },
});
