import { BakeryRepository } from './bakery.repository';
import { BakeryRequestDto } from './dto/bakery.request.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BakeryService {
  constructor(private readonly bakeryRepository: BakeryRepository) {}

  async getAllBakery(page) {
    try {
      return await this.bakeryRepository.findAll(page);
    } catch (error) {
      console.warn(error);
    }
  }

  async getOneBakery(id: string) {
    try {
      return await this.bakeryRepository.findOne(id);
    } catch (error) {
      console.warn(error);
    }
  }

  async createBakery(bakery: BakeryRequestDto) {
    try {
      const { title, body, picture, author } = bakery;
      return await this.bakeryRepository.create({
        title,
        body,
        picture,
        author,
      });
    } catch (error) {
      console.warn(error);
    }
  }

  async updateBakery(id: string, data) {
    try {
      return await this.bakeryRepository.update(id, data);
    } catch (error) {
      console.warn(error);
    }
  }

  async deleteBakery(id: string) {
    try {
      return await this.bakeryRepository.delete(id);
    } catch (error) {
      console.warn(error);
    }
  }
}
