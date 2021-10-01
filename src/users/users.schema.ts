import { Document, SchemaOptions } from 'mongoose';
import {
  IsArray,
  IsDate,
  IsEmail,
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
export class Users extends Document {
  @ApiProperty({
    description: '유저 email',
    required: true,
    example: 'abc@gmail.com',
  })
  @Prop({ required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: '비밀번호',
    required: true,
    example: 'abc',
  })
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  passwd: string;

  @ApiProperty({
    description: '닉네임',
    required: true,
    example: 'nick',
  })
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  nickname: string;

  @ApiProperty({
    description: '유저 프로필 사진',
    example: 'abc.jpg',
  })
  @Prop({
    default: 'https://job.csj.ac.kr/assets/images/contents/no-img.png',
  })
  picture: string;

  @ApiProperty({
    description: 'current hashed refreshToken',
  })
  @Prop({
    default: '',
  })
  refreshToken: string;

  @ApiProperty({
    description: '유저 권한',
    example: '0',
  })
  @Prop({
    default: 0,
  })
  grant: number;

  readonly readOnlyData: {
    id: number;
    email: string;
    nickname: string;
    picture: string;
    grant: number;
    refreshToken: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(Users);

UserSchema.virtual('readOnlyData').get(function (this: Users) {
  return {
    id: this.id,
    email: this.email,
    nickname: this.nickname,
    picture: this.picture,
    grant: this.grant,
    refreshToken: this.refreshToken,
  };
});
