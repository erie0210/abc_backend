import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CommentsCreateDto } from './dto/comments.create.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({
    summary: '특정 레시피에 댓글 남기기',
  })
  // @UseGuards(JwtAuthGuard)
  @Post(':id')
  async saveComment(
    @Param('id') id: string, // * 글 ID
    @Body() body: CommentsCreateDto, // * {author의 userId, contents}
  ) {
    return this.commentsService.saveComment(id, body);
  }

  @ApiOperation({
    summary: '댓글 하나 가져오기',
  })
  // @UseGuards(JwtAuthGuard)
  @Post('/get/:id')
  async getComment(
    @Param('id') id: string, // * 댓글 ID
  ) {
    return this.commentsService.findComment(id);
  }

  @ApiOperation({
    summary: '댓글 삭제하기',
  })
  // @UseGuards(JwtAuthGuard)
  @Post('/delete/:id')
  async deleteComment(
    @Param('id') id: string, // * 댓글 ID
  ) {
    return this.commentsService.deleteComment(id);
  }
}
