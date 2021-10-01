import { CalculatorsController } from './calculators.controller';
import { CalculatorsService } from './calculators.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CalculatorsController],
  providers: [CalculatorsService],
  exports: [CalculatorsService],
})
export class CalculatorsModule {}
