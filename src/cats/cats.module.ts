import { Module, ValidationPipe } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [CatsController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
  ],
})
export class CatsModule {}
