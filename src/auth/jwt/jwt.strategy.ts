import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Payload } from './jwt.payload';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly configService: ConfigService,
  ) {
    super({
      //* fromAuthHeaderAsBearerToken() creates a new extractor that looks for the JWT in the authorization header with the scheme 'bearer'
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey',
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    const user = await this.usersRepository.findUserByIdWithoutPassword(
      payload.sub,
    );
    if (user) {
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}
