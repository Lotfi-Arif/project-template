import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  try {
    // Attempt to load Swagger JSON file
    const swaggerPath = path.join(__dirname, '../../swagger.json');
    const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, 'utf-8'));
    SwaggerModule.setup('docs', app, swaggerDocument);
    Logger.log('Swagger setup successfully');
  } catch (error) {
    if (error instanceof Error) {
      // Now it's safe to access error.message
      Logger.error('Failed to set up Swagger: ' + error.message);
    } else {
      // For non-Error objects, you might want to log differently
      Logger.error('An unknown error occurred during Swagger setup');
    }
  }

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
