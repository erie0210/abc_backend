import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { RecipeService } from './recipe/recipe.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly recipeService: RecipeService,
    private readonly userService: UsersService,
  ) {}

  @Get('/')
  getHello() {
    return 'landing page';
  }
}
