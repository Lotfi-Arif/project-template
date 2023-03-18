import { ValueNode } from 'graphql';
import { Scalar } from '@nestjs/graphql';
import { GraphQLError } from 'graphql/error';
import { Logger } from '@nestjs/common';

@Scalar('Upload')
export class Upload {
  private readonly logger = new Logger(Upload.name);
  description = 'File upload scalar type';

  parseValue(value: any) {
    if (value instanceof Promise) {
      return value;
    }
    throw new GraphQLError('Upload value must be a promise');
  }

  serialize() {
    throw new GraphQLError('Upload serialization not supported');
  }

  parseLiteral(ast: ValueNode) {
    this.logger.debug('parseLiteral', ast);
    throw new GraphQLError('Upload literal parsing not supported');
  }
}
