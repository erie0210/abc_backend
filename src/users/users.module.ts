import { Module, forwardRef } from '@nestjs/common';
import { UserSchema, Users } from './users.schema';

import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UserModule {}
