import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from './modules/users/users.module';
import { PagesModule } from './modules/pages/pages.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ServeStaticModule.forRoot({
      // render public in /public route
      rootPath: join(__dirname, '..', 'client', 'public'),
      // renderPath: '/public',
      serveRoot: '/public',
    }),
    UsersModule,
    PagesModule,
    AuthModule,
  ],
})
export class AppModule {}
