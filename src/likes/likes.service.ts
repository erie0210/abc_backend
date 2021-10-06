import { Injectable } from '@nestjs/common';
import { LikesDto } from './dto/likes.dto';
import { LikesRepository } from './likes.repository';

@Injectable()
export class LikesService {
  constructor(private readonly likesRepository: LikesRepository) {}

  async plusLikes(like: LikesDto) {
    try {
      return await this.likesRepository.plusLike(like);
    } catch (error) {
      console.warn(error);
    }
  }

  async minusLikes(like: LikesDto) {
    try {
      return await this.likesRepository.minusLike(like);
    } catch (error) {
      console.warn(error);
    }
  }
}
