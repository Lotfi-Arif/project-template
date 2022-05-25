import { Config } from './config.interface';

const config: Config = {
  security: {
    expiresIn: '1d',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
