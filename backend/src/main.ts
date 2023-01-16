import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Liquid } from 'liquidjs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const liquid = new Liquid({
    extname: '.liquid',
  });
  app.engine('liquid', liquid.express());
  app.setBaseViewsDir([
    join(__dirname, '..', 'client', 'views'),
    join(__dirname, '..', 'client', 'partials'),
  ]);
  app.setViewEngine('liquid');

  await app.listen(3000);
}
bootstrap();