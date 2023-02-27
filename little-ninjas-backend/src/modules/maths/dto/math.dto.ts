import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class MathDto {

  @IsString()
  @MaxLength(15)
  @IsNotEmpty()
  @ApiProperty()
  readonly category: string; // category 
 
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  readonly question: string; // question

  @IsString()
  @MaxLength(60)
  @IsNotEmpty()
  @ApiProperty()
  readonly answer: number; // answer

  @IsNotEmpty()
  @ApiProperty()
  readonly options: number; // options
}
