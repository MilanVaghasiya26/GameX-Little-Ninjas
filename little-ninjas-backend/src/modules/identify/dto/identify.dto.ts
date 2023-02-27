import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class IdentifyDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  readonly question: string; // question

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  readonly answer: string; // answer

  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  readonly options: string; // options
}
