import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan'; // @note: Import morgan for logging

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // @note: Use morgan for logging
  app.use(morgan('dev'));
  await app.listen(3000);
}
bootstrap();
