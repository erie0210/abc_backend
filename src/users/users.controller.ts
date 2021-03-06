import { Request, Response } from 'express';
import { Error } from 'mongoose';
import { use } from 'passport';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { JwtRefreshAuthGuard } from 'src/auth/jwt/jwt-refresh.guard';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorators';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

import {
    Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res, UseGuards, UseInterceptors
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { ReadOnlyUserDto } from './dto/user.dto';
import { UserRequestDto } from './dto/users.request.dto';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
// @UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiResponse({
    status: 500,
    description: '회원 가입 Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: '회원가입 성공',
    type: ReadOnlyUserDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: UserRequestDto) {
    return await this.usersService.signUp(body);
  }

  @ApiResponse({
    status: 500,
    description: 'access token 새로고침 Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: 'access token 새로고침 성공',
  })
  @ApiOperation({ summary: 'access token 새로고침' })
  @UseGuards(JwtRefreshAuthGuard)
  @Post('refresh')
  async refresh(
    @Req() req,
    @Res({ passthrough: true }) res: Response,
    @Body() body,
  ) {
    const { id } = body;
    try {
      const refreshToken = req.cookies.Refresh;
      const user = await this.authService.getUserIfTokenMatch(id, refreshToken);
      const { email, _id } = user;
      const payload = { email: email, sub: _id };
      const token = await this.authService.getAccessToken(payload);
      res.cookie('Authentication', token);
      return token;
    } catch (error) {
      return 'Refresh Token Validaion Error';
    }
  }

  @ApiResponse({
    status: 200,
  })
  @ApiOperation({ summary: '특정 유저 정보 가져오기' })
  @UseGuards(JwtAuthGuard) //*인증처리
  @Get(':id')
  async getOneUser(@Body() body: UserRequestDto) {
    return this.usersService.getOneUser(body);
  }

  @ApiResponse({
    status: 200,
  })
  @ApiOperation({ summary: '특정 유저 정보 가져오기- 유저 정보 업데이트' })
  // @UseGuards(JwtAuthGuard) //*인증처리
  @Get('/update/:id')
  async getUser(@Param('id') id) {
    return this.usersService.getUser(id);
  }

  @ApiResponse({
    status: 500,
    description: '로그인 Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: '로그인 성공',
  })
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  async logIn(
    @Req() req,
    @Res({ passthrough: true }) res: Response,
    @Body() data: LoginRequestDto,
  ) {
    const { user, token, refreshToken, hashedToken } =
      await this.authService.jwtLogIn(data);
    res.cookie('Refresh', hashedToken);
    return { user, token, refreshToken, hashedToken };
  }

  //* 로그아웃은 JWT를 프론트에서 제거하면 된다...?!
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  async logOut() {
    return 'logout';
  }

  // * 유저 정보 수정
  @ApiResponse({
    status: 200,
    description: '회원 정보 수정 성공',
    type: ReadOnlyUserDto,
  })
  @ApiResponse({
    status: 500,
    description: '회원 정보 수정 Server Error...',
  })
  @ApiOperation({ summary: '회원 정보 수정' })
  @Patch('/')
  async updateUser(@Query('userId') userId, @Body() body) {
    return await this.usersService.updateUser(userId, body);
  }

  // * 탈퇴하기
  @ApiResponse({
    status: 500,
    description: '탈퇴하기 Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: '탈퇴하기 성공',
    type: ReadOnlyUserDto,
  })
  // * JWT 설정하기
  @ApiOperation({ summary: '탈퇴하기' })
  @Delete(':id')
  async deleteUser(@Param('id') id) {
    return await this.usersService.deleteUser(id);
  }
}
