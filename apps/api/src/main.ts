/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { config } from 'dotenv';

import { Logger } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);

  // Enable CORS
  const corsOptions: CorsOptions = {
    origin: true, // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
  };
  app.enableCors(corsOptions);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
