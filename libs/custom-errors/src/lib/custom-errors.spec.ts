import { customErrors } from './custom-errors';

describe('customErrors', () => {
  it('should work', () => {
    expect(customErrors()).toEqual('custom-errors');
  });
});
