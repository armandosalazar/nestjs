import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPing(): string {
    return 'Pong!';
  }

  getMessage(): object {
    return {
      message: 'Hello World!',
    };
  }
}
