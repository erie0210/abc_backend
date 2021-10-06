import { Likes, LikesSchema } from './likes.schema';

import { LikesController } from './likes.controller';
import { LikesRepository } from './likes.repository';
import { LikesService } from './likes.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Likes.name, schema: LikesSchema }]),
  ],
  providers: [LikesService, LikesRepository],
  controllers: [LikesController],
  exports: [LikesRepository],
})
export class LikesModule {}
