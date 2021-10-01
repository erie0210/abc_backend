import * as bcrypt from 'bcrypt';

import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRequestDto } from './dto/users.request.dto';
import { Users } from './users.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  // constructor(@InjectModel(Users.name) private userModel: Model<Users>) {} <---DB를 직접 inject 하는 대신 repository 이용
  constructor(private readonly usersRepository: UsersRepository) {}

  async signUp(body: UserRequestDto) {
    const { id, email, passwd, nickname, picture, grant, refreshToken } = body;
    const isEmailExist = await this.usersRepository.existsByEmail(email);

    if (isEmailExist) {
      // throw new HttpExceptionFilter("해당하는 이메일이 이미 존재합니다.", 403);
      throw new UnauthorizedException('해당하는 이메일이 이미 존재하니다.'); // 403 에러 발생시킴
    }

    const hashedPassword = await bcrypt.hash(passwd, 10);

    const user = await this.usersRepository.create({
      id,
      email,
      passwd: hashedPassword,
      nickname,
      picture,
      grant,
      refreshToken,
    });
    return user;
  }

  async getOneUser(body: UserRequestDto) {
    const { id } = body;
    return this.usersRepository.findUserById(id);
  }
}
