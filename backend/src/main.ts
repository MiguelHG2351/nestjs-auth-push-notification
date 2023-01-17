import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Liquid } from 'liquidjs';
// import { ConfigService } from '@nestjs/config';
// import { ServiceAccount } from 'firebase-admin/app';
// import * as admin from 'firebase-admin';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const configService = app.get(ConfigService);
  // const adminConfig: ServiceAccount = configService.get('firebase');

  // admin.initializeApp({
  //   credential: admin.credential.cert(adminConfig),
  //   databaseURL: `https://${adminConfig.projectId}.firebaseio.com`,
  // });

  // Set up Liquid templating engine
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
