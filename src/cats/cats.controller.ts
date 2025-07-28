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
  UsePipes,
  //   UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/createCat.dto';
import {
  CreateCatSchema,
  CreateCatZodDto,
} from 'src/cats/dto/createCatZod.dto';
// import { IdParamDto } from 'src/cats/dto/idParam.dto';
import { ParseIdPipe } from 'src/cats/pipes/parseIdPipe';
import { ZodValidationPipe } from 'src/cats/pipes/zodValidationPipe';

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
  @UsePipes(new ZodValidationPipe(CreateCatSchema))
  createCat(
    @Body(
      new ValidationPipe({
        groups: ['create'],
        always: true,
      }),
    )
    body: CreateCatZodDto,
  ) {
    return body;
  }

  @Patch(':id')
  //   @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  updateCat(
    // @Param('id') param: IdParamDto,
    @Param('id', ParseIdPipe) id,
    @Body(
      new ValidationPipe({
        groups: ['update'],
        always: true,
      }),
    )
    body: CreateCatDto,
  ) {
    return body;
  }
}
