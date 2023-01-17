import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from './modules/users/users.module';
import { PagesModule } from './modules/pages/pages.module';
import { AuthModule } from './modules/auth/auth.module';
import { FirebaseModule } from './modules/firebase/firebase.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // render public in /public route
      rootPath: join(__dirname, '..', 'client', 'public'),
      // renderPath: '/public',
      serveRoot: '/public',
    }),
    UsersModule,
    PagesModule,
    AuthModule,
    FirebaseModule,
  ],
})
export class AppModule {}
