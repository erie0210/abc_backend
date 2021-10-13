import { Document, SchemaOptions, Types } from 'mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Comments extends Document {
  @ApiProperty({
    description: '작성한 유저 id',
    required: true,
    example: '',
  })
  @Prop({
    type: String,
    required: true,
    ref: 'recipes',
  })
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    description: '작성한 유저 이름',
    required: true,
    example: '예시 유저 닉네임',
  })
  @Prop({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: '댓글 컨텐츠',
    required: true,
    example: '예시 컨텐츠',
  })
  @Prop({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  contents: string;

  @ApiProperty({
    description: '작성대상(게시글)',
    required: true,
    example: '',
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'recipes',
  })
  @IsNotEmpty()
  info: Types.ObjectId;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
