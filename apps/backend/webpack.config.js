import { join } from 'path';
import nodeExternals from 'webpack-node-externals';

export const entry = {
  server: './src/executable/server.ts',
};
export const output = {
  path: join(__dirname, 'dist'),
  filename: '[name].js',
};
export const optimization = {
  minimize: false,
};
export const externals = [nodeExternals()];
export const mode = 'development';
export const target = 'node';
export const module = {
  rules: [
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
    },
  ],
};
export const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
};
