import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bakery } from './bakery.schema';
import { BakeryRequestDto } from './dto/bakery.request.dto';
import * as mongoose from 'mongoose';
import { CommentsSchema } from 'src/comments/comments.schema';
import { UserSchema } from 'src/users/users.schema';

@Injectable()
export class BakeryRepository {
  constructor(
    @InjectModel(Bakery.name) private readonly bakeryModel: Model<Bakery>,
  ) {}

  async findAll() {
    const CommentsModel = mongoose.model('comments', CommentsSchema);
    const UsersModel = mongoose.model('users', UserSchema);
    return await this.bakeryModel
      .find()
      .populate('comments', CommentsModel)
      .populate('users', UsersModel)
      .sort('createdAt');
  }

  async findOne(id: string) {
    const CommentsModel = mongoose.model('comments', CommentsSchema);
    const UsersModel = mongoose.model('users', UserSchema);
    return await this.bakeryModel
      .findById(id)
      .populate('comments', CommentsModel)
      .populate('users', UsersModel);
  }

  async create(bakery: BakeryRequestDto): Promise<Bakery> {
    try {
      return await this.bakeryModel.create(bakery);
    } catch (error) {
      console.warn(error);
    }
  }

  async update(id: string, data): Promise<Bakery> {
    try {
      return await this.bakeryModel.findByIdAndUpdate(id, data);
    } catch (error) {
      console.warn(error);
    }
  }

  async delete(id: string) {
    return await this.bakeryModel.findByIdAndDelete(id);
  }
}
