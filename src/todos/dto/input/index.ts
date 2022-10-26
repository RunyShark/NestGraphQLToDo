import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { IsBoolean } from 'class-validator/types/decorator/decorators';

export class CreateTodoDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @MinLength(2)
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
