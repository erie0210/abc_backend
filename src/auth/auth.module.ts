import { Module, forwardRef } from '@nestjs/common';

import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtRefreshAuthGuard } from './jwt/jwt-refresh.guard';
import { JwtRefreshStrategy } from './jwt/jwt-refresh.strategy';
import { JwtStrategy } from './jwt/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/users/users.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secret: 'secretKey',
    }),
    forwardRef(() => UserModule),
  ],
  providers: [AuthService, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthService],
})
export class AuthModule {}
