import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { Users } from '../users.schema';

export class ReadOnlyUserDto extends PickType(Users, [
  'id',
  'email',
  'nickname',
  'picture',
  'grant',
  'refreshToken',
]) {
  //  * PickType: 원하는 정보만 가져온다
  //  * 객체(schema)에는 없지만 사용해야하는 경우 아래처럼 직접 정의하면 된다
  id: number;
}
