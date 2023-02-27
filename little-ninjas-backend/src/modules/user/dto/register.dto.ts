import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';

/**
 * User Registration request DTO
 */

export class RegisterDto {

    @IsString()
    @MinLength(1)
    @MaxLength(25)
    @IsNotEmpty()
    @ApiProperty()
    readonly user_name: string;

}
