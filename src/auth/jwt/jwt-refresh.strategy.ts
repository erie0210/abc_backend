import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, Req, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Payload } from './jwt.payload';
import { UsersRepository } from 'src/users/users.repository';
import { request } from 'express';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey',
      passReqToCallback: true,
    });
  }

  async validate(@Req() req, payload: Payload) {
    const hashedToken = req.cookies.Refresh;
    return await this.authService.getUserIfTokenMatch(payload.sub, hashedToken);
  }
}
