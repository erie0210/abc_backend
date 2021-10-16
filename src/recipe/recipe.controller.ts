import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Put,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

// import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { RecipeService } from './recipe.service';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { RecipeRequestDto } from './dto/recipe.request.dto';
import { RecipeDto } from './dto/recipe.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { catchError } from 'rxjs';
import { Error } from 'mongoose';

@Controller('recipes')
@UseInterceptors(SuccessInterceptor)
// @UseFilters(HttpExceptionFilter)
export class RecipesController {
  private logger = new Logger('RecipeController');
  constructor(private readonly recipeService: RecipeService) {}

  //* public 레시피 모두 가져오기
  @ApiResponse({
    status: 500,
    description: 'Public Recipe 가져오기 Server Error...',
  })
  @ApiResponse({
    status: 200,
  })
  @ApiOperation({ summary: 'Public Recipe 전체 가져오기' })
  // @UseGuards(JwtAuthGuard)
  @Get('/public/:page/:sort')
  async getPublicRecipe(@Param('page') page, @Param('sort') sort) {
    this.logger.verbose(`User A trying to get all public recipes`);
    try {
      return await this.recipeService.publicRecipe(page, sort);
    } catch (error) {
      throw new Error(error);
    }
  }

  //* 검색하기
  @ApiResponse({
    status: 500,
    description: 'Recipe 검색 Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: 'Recipe 검색 성공',
  })
  @ApiOperation({ summary: 'Recipe 검색' })
  @UseGuards(JwtAuthGuard)
  @Post('/search')
  async search(@Body() body) {
    const { keyword, page, sort } = body;
    const res = await this.recipeService.searchRecipe(keyword, page, sort);
    return res;
  }

  //* 특정 유저의 레시피 캐싱
  // @ApiResponse({
  //   status: 500,
  //   description: '특정 user의 Recipe 캐싱 Server Error...',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: '특정 user의 Recipe 캐싱 성공',
  // })
  // @ApiOperation({ summary: '특정 user의 recipe 전체 가져오기' })
  // @UseGuards(JwtAuthGuard)
  // @Get('/private/:id')
  // async getPrivateCacheRecipe(@Param('id') userId) {
  //   return await this.recipeService.cachePrivateRecipe(userId);
  // }

  //* 특정 유저의 특정 레시피 모두 가져오기
  @ApiResponse({
    status: 500,
    description:
      '특정 user의 특정 카테고리 Recipe 전체 가져오기 Server Error...',
  })
  @ApiResponse({
    status: 200,
  })
  @ApiOperation({ summary: '특정 user의 특정 카테고리 Recipe 전체 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get('/private/:category/:id/:page')
  async getPrivateRecipe(
    @Param('category') category,
    @Param('id') userId,
    @Param('page') page,
  ) {
    return await this.recipeService.privateRecipe(category, userId, page);
  }

  //* 레시피 하나 가져오기
  @ApiResponse({
    status: 500,
    description: '특정 Recipe 가져오기 Server Error...',
  })
  @ApiResponse({
    status: 200,
  })
  @ApiOperation({ summary: '특정 Recipe 가져오기' })
  // @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getOneRecipe(@Param('id') id) {
    return await this.recipeService.getRecipe(id);
  }

  //* 새로운 레시피 생성
  @ApiResponse({
    status: 500,
    description: 'Recipe 생성 Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: 'Recipe 생성 성공!',
  })
  @ApiOperation({ summary: 'Recipe 생성' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  async createRecipe(@Body() data: RecipeRequestDto) {
    return await this.recipeService.createRecipe(data);
  }

  //* 업데이트
  @ApiResponse({
    status: 500,
    description: 'Recipe 업데이트 Server Error...',
  })
  @ApiResponse({
    status: 200,
  })
  @UseGuards(JwtAuthGuard)
  @Patch('/update/:id')
  async updateRecipe(@Param('id') id, @Body() data) {
    return await this.recipeService.updateRecipe(id, data);
  }

  //* 삭제하기
  @ApiResponse({
    status: 500,
    description: 'Recipe 삭제하기 Server Error...',
  })
  @ApiResponse({
    status: 200,
  })
  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  async deleteRecipe(@Param('id') param) {
    return await this.recipeService.deleteRecipe(param);
  }

  @ApiOperation({
    summary: '좋아요 수 올리기',
  })
  // @UseGuards(JwtAuthGuard)
  @Patch('/plus/:id')
  async plusLike(@Param('id') id: string) {
    return this.recipeService.plusLike(id);
  }

  @ApiOperation({
    summary: '좋아요 수 줄이기',
  })
  @Patch('/minus/:id')
  async minusLike(@Param('id') id: string) {
    return this.recipeService.minusLike(id);
  }
}
