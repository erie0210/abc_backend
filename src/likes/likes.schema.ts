import { Document, SchemaOptions } from 'mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Likes extends Document {
  @ApiProperty({
    description: '좋아요를 누른 사용자 Id',
    required: true,
    example: '',
  })
  @Prop({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({
    description: '좋아요를 누를 글 Id',
    required: true,
    example: '',
  })
  @Prop({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  postId: string;
}

export const LikesSchema = SchemaFactory.createForClass(Likes);
