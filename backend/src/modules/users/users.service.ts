import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class UsersService {
  constructor(@Inject('FIREBASE_ADMIN') private firebase: App) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    const users = getAuth(this.firebase).listUsers();
    console.log(`This action returns all users`);
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
