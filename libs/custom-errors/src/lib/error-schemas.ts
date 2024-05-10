import { z } from 'zod';
import { withErrorEnvelope } from './api-utils';

export type HttpError =
  | BadRequestError
  | UnauthorizedError
  | ForbiddenError
  | NotFoundError
  | UnprocessableContentError
  | InternalServerError;

export const BadRequestErrorSchema = withErrorEnvelope(
  z.object({
    code: z.literal('BadRequestError'),
  }),
);

export type BadRequestError = z.infer<typeof BadRequestErrorSchema>;

export const UnauthorizedErrorSchema = withErrorEnvelope(
  z.object({
    code: z.literal('UnauthorizedError'),
  }),
);

export type UnauthorizedError = z.infer<typeof UnauthorizedErrorSchema>;

export const ForbiddenErrorSchema = withErrorEnvelope(
  z.object({
    code: z.literal('ForbiddenError'),
  }),
);

export type ForbiddenError = z.infer<typeof ForbiddenErrorSchema>;

export const NotFoundErrorSchema = withErrorEnvelope(
  z.object({
    code: z.literal('NotFoundError'),
  }),
);

export type NotFoundError = z.infer<typeof NotFoundErrorSchema>;

export const UnprocessableContentErrorSchema = withErrorEnvelope(
  z.object({
    code: z.literal('UnprocessableContent'),
  }),
);

export type UnprocessableContentError = z.infer<
  typeof UnprocessableContentErrorSchema
>;

export const InternalServerErrorSchema = withErrorEnvelope(
  z.object({
    code: z.literal('InternalServerError'),
  }),
);

export type InternalServerError = z.infer<typeof InternalServerErrorSchema>;
