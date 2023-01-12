import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class PagesController {
  @Get('/')
  @Render('hello')
  Home() {
    const todos = ['fork and clone', 'make it better', 'make a pull request'];
    return {
      todos,
      title: 'Welcome to liquidjs',
    };
  }
}
