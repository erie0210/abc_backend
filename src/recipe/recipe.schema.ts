import { Document, SchemaOptions } from 'mongoose';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Recipe extends Document {
  @Prop({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @Prop({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  share: boolean;

  @Prop({
    type: Number,
    default: 0,
  })
  @IsNumber()
  view: number;

  @ApiProperty({
    description: '좋아요',
    required: true,
  })
  @Prop({
    type: Number,
    default: 0,
  })
  @IsNotEmpty()
  likes: number;

  @Prop({
    type: String,
    default: '',
  })
  @IsString()
  contents: string;

  @Prop({
    type: Array,
    default: ['https://i.stack.imgur.com/y9DpT.jpg'],
  })
  @IsArray()
  pictures: Array<String>;

  @Prop({
    type: Number,
    required: true,
    default: 3,
  })
  @IsNumber()
  star: number;

  @Prop({
    type: Array,
    required: true,
  })
  @IsArray()
  ingredients: Array<Object>;

  @Prop({
    type: Array,
    required: true,
  })
  @IsArray()
  nutrition: Array<Object>;

  @Prop({
    type: String,
    required: true,
  })
  @IsString()
  author: string;
}

const _RecipeSchema = SchemaFactory.createForClass(Recipe);

_RecipeSchema.virtual('comments', {
  ref: 'comments',
  localField: '_id',
  foreignField: 'info',
});
_RecipeSchema.set('toObject', { virtuals: true });
_RecipeSchema.set('toJSON', { virtuals: true });

export const RecipeSchema = _RecipeSchema;
