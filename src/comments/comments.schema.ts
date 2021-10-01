import { Document, SchemaOptions, Types } from 'mongoose';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Recipe } from 'src/recipe/recipe.schema';
import { Users } from 'src/users/users.schema';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Comments extends Document {
  @ApiProperty({
    description: '작성한 유저 id',
    required: true,
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
  })
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: '댓글 컨텐츠',
    required: true,
  })
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  contents: string;

  @ApiProperty({
    description: '작성대상(게시글)',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'recipes',
  })
  @IsNotEmpty()
  info: Types.ObjectId;

  readonly readOnlyData: {};
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);

CommentsSchema.virtual('readOnlyData').get(function (this: Comments) {
  return {};
});
