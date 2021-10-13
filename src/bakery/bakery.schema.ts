import { Document, SchemaOptions } from 'mongoose';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
} from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Bakery extends Document {
  @ApiProperty({
    description: '빵집 이름',
    required: true,
    example: '',
  })
  @Prop({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: '조회수',
    required: true,
    example: '234',
  })
  @Prop({
    type: Number,
    required: true,
    default: 0,
  })
  @IsNotEmpty()
  @IsNumber()
  view: number;

  @ApiProperty({
    description: '좋아요 수',
    required: true,
    example: '12',
  })
  @Prop({
    type: Number,
    required: true,
    default: 0,
  })
  @IsNotEmpty()
  @IsNumber()
  likes: number;

  @ApiProperty({
    description: '베이커리에 대한 설명',
    required: true,
    example: '',
  })
  @Prop({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  body: string;

  @ApiProperty({
    description: '베이커리에 대한 설명',
    required: true,
    example: '',
  })
  @Prop({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  picture: string;

  @ApiProperty({
    description: '베이커리에 대한 설명',
    required: true,
    example: '',
  })
  @Prop({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  author: string;
}

export const _BakerySchema = SchemaFactory.createForClass(Bakery);

_BakerySchema.virtual('comments', {
  ref: 'comments',
  localField: '_id',
  foreignField: 'info',
});
_BakerySchema.virtual('users', {
  ref: 'users',
  localField: 'author',
  foreignField: '_id',
});

_BakerySchema.set('toObject', { virtuals: true });
_BakerySchema.set('toJSON', { virtuals: true });
export const BakerySchema = _BakerySchema;
