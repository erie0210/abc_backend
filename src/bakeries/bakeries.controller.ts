import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { BakeriesService } from './bakeries.service';

@Controller('bakeries')
export class BakeriesController {
  constructor(private readonly bakeriesService: BakeriesService) {}

  @Get('/')
  getAllBakeries() {
    return '모든 베이커리 정보 리턴';
  }

  @Get(':id')
  getOneBakery() {
    return '특정한 베이커리 정보 리턴';
  }

  @Post('/')
  createBakery() {
    return '베이커리 정보 생성';
  }

  @Put(':id')
  updateBakery() {
    return '특정 베이커리 정보 업데이트';
  }

  @Delete(':id')
  deleteBakery() {
    return '특정 베이커리 정보 삭제';
  }
}
