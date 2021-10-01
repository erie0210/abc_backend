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
export class Recipe extends Document {
  // primary key
  // @Prop({ required: true, unique: true })
  // @IsNumber()
  // id: number;

  @Prop({ required: true })
  @IsString()
  title: string;

  @Prop({ required: true })
  @IsBoolean()
  share: boolean;

  @Prop({ required: true })
  @IsNumber()
  view: number;

  @ApiProperty({
    description: '좋아요',
    required: true,
  })
  @Prop({
    required: true,
    default: 0,
  })
  @IsNotEmpty()
  likes: number;

  @Prop({ required: true })
  @IsString()
  contents: string;

  @Prop({ required: true })
  @IsArray()
  pictures: Array<String>;

  @Prop({ required: true })
  @IsNumber()
  star: number;

  @Prop({ required: true })
  @IsArray()
  ingredients: Array<Object>;

  @Prop({ required: true })
  @IsArray()
  nutrition: Array<Object>;

  // foreign key
  @Prop({ required: true })
  @IsString()
  author: string;

  // @Prop({ required: true })
  // @IsNumber()
  // author_id: number;
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

// export const RecipeSchema = SchemaFactory.createForClass(Recipe).index({
//   title: 'text',
//   comments: 'text',
//   contents: 'text',
//   ingredients: 'text',
//   nutrition: 'text',
//   author: 'text',
// });
