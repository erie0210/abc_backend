import { Bakery, BakerySchema } from './bakery.schema';
import { Comments, CommentsSchema } from 'src/comments/comments.schema';

import { BakeryController } from './bakery.controller';
import { BakeryRepository } from './bakery.repository';
import { BakeryService } from './bakery.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bakery.name, schema: BakerySchema },
      { name: Comments.name, schema: CommentsSchema },
    ]),
  ],
  controllers: [BakeryController],
  providers: [BakeryService, BakeryRepository],
  exports: [BakeryRepository],
})
export class BakeryModule {}
