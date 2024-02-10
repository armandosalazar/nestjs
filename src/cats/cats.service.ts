import { Injectable } from '@nestjs/common';
import { Cat, PrismaClient } from '@prisma/client';

@Injectable()
export class CatsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createCat(): Promise<Cat> {
    return await this.prisma.cat.create({
      data: {
        name: 'Whiskers',
        age: 3,
      },
    });
  }
}
