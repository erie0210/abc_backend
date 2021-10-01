import { Controller, Get, UseGuards } from '@nestjs/common';

import { ApiResponse } from '@nestjs/swagger';
import { CalculatorsService } from './calculators.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('calculators')
export class CalculatorsController {
  constructor(private readonly calculatorService: CalculatorsService) {}

  @ApiResponse({
    status: 500,
    description: 'Calculator로 이동 Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: 'Calculator로 이동 성공',
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getRecipeToCalculator() {
    return '계산기로 레시피 이동';
  }
}
