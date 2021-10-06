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
  @Prop({ required: true })
  @IsString()
  title: string;

  @Prop({ required: true, default: 0 })
  @IsNumber()
  view: number;

  @Prop({ required: true, default: 0 })
  @IsNumber()
  likes: number;

  @Prop({ required: true })
  @IsString()
  body: string;

  @Prop({ required: true })
  @IsString()
  picture: string;

  @Prop({ required: true })
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
