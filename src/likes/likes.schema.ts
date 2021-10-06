import { Document, SchemaOptions } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

@Schema()
export class Likes extends Document {
  @Prop({ required: true })
  @IsString()
  userId: string;

  @Prop({ required: true })
  @IsString()
  postId: string;
}

export const LikesSchema = SchemaFactory.createForClass(Likes);
