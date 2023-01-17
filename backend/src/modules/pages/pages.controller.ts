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

  @Get('/login')
  @Render('login')
  login() {
    const todos = ['fork and clone', 'make it better', 'make a pull request'];
    return {
      todos,
      title: 'Edit: Miguel2351',
    };
  }

  @Get('/edit')
  @Render('edit')
  Edit() {
    const todos = ['fork and clone', 'make it better', 'make a pull request'];
    return {
      todos,
      title: 'Edit: Miguel2351',
    };
  }

  @Get('/profile')
  @Render('profile')
  Profile() {
    const todos = ['fork and clone', 'make it better', 'make a pull request'];
    return {
      todos,
      title: 'Edit: Miguel2351',
    };
  }
}
