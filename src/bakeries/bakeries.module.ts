import { Module } from '@nestjs/common';
import { BakeriesController } from './bakeries.controller';
import { BakeriesService } from './bakeries.service';

@Module({
  controllers: [BakeriesController],
  providers: [BakeriesService]
})
export class BakeriesModule {}
