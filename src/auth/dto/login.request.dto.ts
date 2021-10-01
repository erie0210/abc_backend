import { PickType } from '@nestjs/swagger';
import { Users } from 'src/users/users.schema';

export class LoginRequestDto extends PickType(Users, ['email', 'passwd']) {}
