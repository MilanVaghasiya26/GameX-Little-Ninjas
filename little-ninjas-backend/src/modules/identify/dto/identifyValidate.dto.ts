import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class IdentifyValidateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly options: string; // options
}
