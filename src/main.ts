import * as cookieParser from 'cookie-parser';
import * as expressBasicAuth from 'express-basic-auth';
import * as path from 'path';

import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(
    ['/docs', '/docs-json'],
    expressBasicAuth({
      challenge: true,
      users: {
        [process.env.SWAGGER_USER]: process.env.SWAGGER_USER_PASSWORD,
      },
    }),
  );
  // app.use(helmet());
  // app.use(morgan("dev"));
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Recipes example')
    .setDescription('The recipes API description')
    .setVersion('1.0')
    .addTag('recipes')
    .build();
  ``;

  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors({
    origin: true,
    credentials: true,
  });

  await app.listen(process.env.PORT);
  Logger.log(`Application running on port ${process.env.PORT}`);
}

bootstrap();
