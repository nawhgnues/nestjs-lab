import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @Length(2, 10, { message: 'error on length' })
  name: string;

  @IsString()
  @Length(2, 10, { groups: ['create'] })
  @Length(10, 30, { groups: ['update'] })
  description: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  sex: string;
}
