import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CountValidateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly options: number; // options
}
