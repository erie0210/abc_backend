import { Body, Controller, Post } from '@nestjs/common';
import { LikesDto } from './dto/likes.dto';
import { LikesService } from './likes.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @ApiResponse({
    status: 500,
    description: '좋아요 추가 Server Error...',
  })
  @ApiResponse({
    status: 200,
  })
  @ApiOperation({ summary: '좋아요 추가' })
  // @UseGuards(JwtAuthGuard)
  @Post('/plus')
  async plusLikes(@Body() body: LikesDto) {
    return await this.likesService.plusLikes(body);
  }

  @ApiResponse({
    status: 500,
    description: '좋아요 삭제 Server Error...',
  })
  @ApiResponse({
    status: 200,
  })
  @ApiOperation({ summary: '좋아요 삭제' })
  // @UseGuards(JwtAuthGuard)
  @Post('/minus')
  async minusLikes(@Body() body: LikesDto) {
    return await this.likesService.minusLikes(body);
  }
}
