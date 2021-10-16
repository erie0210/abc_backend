// import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Users } from './users.schema';
import { UserRequestDto } from './dto/users.request.dto';
import { stringify } from 'querystring';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<Users>, // <--- DB 인젝션을 직접 함
  ) {}

  async findAll() {
    return await this.userModel.find();
  }

  async findUserByIdWithoutPassword(
    userId: string | Types.ObjectId,
  ): Promise<UserRequestDto | null> {
    const user = await this.userModel.findById(userId).select('-passwd');
    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async findUserById(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async existsByEmail(email: string): Promise<boolean> {
    try {
      const result = await this.userModel.exists({ email });
      return result;
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }

  async create(user: UserRequestDto): Promise<Users> {
    return await this.userModel.create(user);
  }

  async updateRefreshToken(id: string, token: string) {
    const res = await this.userModel.findByIdAndUpdate(id, {
      refreshToken: token,
    });
    return res;
  }

  async update(id: string, body) {
    try {
      return await this.userModel.findByIdAndUpdate(id, body, { new: true });
    } catch (error) {
      console.warn(error);
    }
  }

  async deleteUser(id: string) {
    try {
      return await this.userModel.findByIdAndDelete(id);
    } catch (error) {
      console.warn(error);
    }
  }
}
