import * as bcrypt from 'bcrypt';

import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';

import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto } from './dto/login.request.dto';
import { Payload } from './jwt/jwt.payload';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) {
    const { email, passwd } = data;

    //* 해당하는 이메일이 있는 지 check
    const user = await this.usersRepository.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('해당하는 이메일이 없습니다');
    }
    //* password가 일치하는 지 check
    const isPasswordValidated: boolean = await bcrypt.compare(
      passwd,
      user.passwd,
    );
    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호가 일치하지 않습니다.');
    }

    try {
      const payload = { email: email, sub: user.id };
      const token = this.jwtService.sign(payload, {
        secret: 'secretKey',
        expiresIn: '7200000s',
      });
      const refreshToken = this.jwtService.sign(payload, {
        secret: 'secretKey',
        expiresIn: '7200000s',
      });
      const res = await this.setCurrentRefreshToken(user.id, refreshToken);
      const hashedToken = res;
      return { user, token, refreshToken, hashedToken };
    } catch (error) {
      throw new BadRequestException('로그인 중 에러가 발생하였습니다.');
    }
  }

  async getAccessToken(payload: Payload) {
    const token = this.jwtService.sign(payload, {
      secret: 'secretKey',
      expiresIn: '7200000s',
    });
    return token;
  }

  async getRefreshToken(id: string) {
    const payload = { id };
    const refreshToken = this.jwtService.sign(payload, {
      secret: 'secretKey',
      expiresIn: '7200000s',
    });
    return refreshToken;
  }

  // * DB에 refresh 토큰 저장
  async setCurrentRefreshToken(id: string, refreshToken: string) {
    const currentHashedRefreshedToken = await hash(refreshToken, 10);
    await this.usersRepository.updateRefreshToken(id, refreshToken);
    return currentHashedRefreshedToken;
  }

  async getUserIfTokenMatch(id: string, hashedToken: string) {
    const user = await this.usersRepository.findUserById(id);
    //* should return true, compare text , hashed
    const isMatching = await compare(user.refreshToken, hashedToken);
    if (isMatching) {
      return user;
    }
  }

  async removeFreshToken(id: string) {
    const token = '';
    return this.usersRepository.updateRefreshToken(id, token);
  }
}
