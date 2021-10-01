import { PickType } from '@nestjs/swagger';
import { Users } from '../users.schema';

export class UserRequestDto extends PickType(Users, [
  'id',
  'email',
  'passwd',
  'nickname',
  'picture',
  'grant',
  'refreshToken',
]) {}
