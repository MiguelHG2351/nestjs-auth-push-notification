import * as admin from 'firebase-admin';
import { Module, Global } from '@nestjs/common';
import { initializeApp } from 'firebase-admin/app';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'src/config/configuration';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      async useFactory(configService: ConfigService) {
        const adminConfig = configService.get('firebase');
        const app = initializeApp({
          credential: admin.credential.cert(adminConfig),
          databaseURL: `https://${adminConfig.projectId}.firebaseio.com`,
        });
        return app;
      },
      inject: [ConfigService],
    },
  ],
  exports: ['FIREBASE_ADMIN'],
})
export class FirebaseModule {}
