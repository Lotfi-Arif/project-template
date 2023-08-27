import { Config } from './config.interface';

const config: Config = {
  security: {
    expiresIn: '1d',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './graphql/schema.graphql',
    sortSchema: true,
  },
};

export default (): Config => config;
