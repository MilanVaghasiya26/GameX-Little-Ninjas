import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class MathValidateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly options: number; // options
}
