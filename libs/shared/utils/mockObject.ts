import { z, AnyZodObject } from 'zod';
import { generateMock } from '@anatine/zod-mock';

export const mockObject = <T extends AnyZodObject>(
  parser: T,
  overrides: Partial<z.infer<T>> = {},
) => {
  const mock = generateMock(parser);
  return { ...mock, ...overrides };
};
