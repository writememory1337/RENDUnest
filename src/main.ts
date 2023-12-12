import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  appConfig(app);
  initSwagger(app);
  await app.listen(3000);
}

function appConfig(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
}

function initSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('rendunest')
    .setDescription('le rendu NEST lul')
    .addServer('http://localhost:3000') 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

bootstrap();
