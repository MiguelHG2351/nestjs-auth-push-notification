import { Injectable, Inject } from '@nestjs/common';
import { App } from 'firebase-admin/app';

@Injectable()
export class AuthService {
  constructor(@Inject('FIREBASE_ADMIN') private firebase: App) {}
  getHello(): string {
    console.log(this.firebase);
    return 'Hello World!';
  }
}
