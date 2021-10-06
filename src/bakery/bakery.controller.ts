import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { BakeryService } from './bakery.service';
import { BakeryRequestDto } from './dto/bakery.request.dto';

@Controller('bakery')
export class BakeryController {
  constructor(private readonly bakeryService: BakeryService) {}

  @Get('/')
  async getAllBakery() {
    return await this.bakeryService.getAllBakery();
  }

  @Get(':id')
  async getOneBakery(@Param('id') id: string) {
    return await this.bakeryService.getOneBakery(id);
  }

  @Post('/')
  async createBakery(@Body() body: BakeryRequestDto) {
    return await this.bakeryService.createBakery(body);
  }

  @Patch(':id')
  async updateBakery(@Param('id') id, @Body() data) {
    return await this.bakeryService.updateBakery(id, data);
  }

  @Delete(':id')
  async deleteBakery(@Param('id') id: string) {
    return await this.bakeryService.deleteBakery(id);
  }
}
