import { ApiProperty } from '@nestjs/swagger';
import { Identify } from '../../../entities/identify.entity';

export class IdentifyResponseDto {
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly question: string;

    @ApiProperty()
    readonly options: string[];

    constructor(identify: Identify) {
        this.id = identify.id;
        this.question = identify.question;
        this.options = identify.options;
    }
}
