import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from '@prisma/client';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): string {
    return 'Meow!';
  }

  @Post()
  async createCat(): Promise<Cat> {
    return await this.catsService.createCat();
  }
}
