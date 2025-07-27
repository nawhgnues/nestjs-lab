import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  //   UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/createCat.dto';

@Controller('cats')
export class CatsController {
  @Get('/all')
  getAllCats(): string {
    return '🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof id);
    console.log(sort);
    return '🐈';
  }

  @Post()
  //   @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  createCat(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['create'],
        always: true,
      }),
    )
    body: CreateCatDto,
  ) {
    return body;
  }

  @Patch(':id')
  //   @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  updateCat(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['update'],
        always: true,
      }),
    )
    body: CreateCatDto,
  ) {
    return body;
  }
}
