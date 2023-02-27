import { ApiProperty } from '@nestjs/swagger';
import { Counting } from '../../../entities/counting.entity';

export class CountingResponseDto {
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly question: string[];

    @ApiProperty()
    readonly options: number[];

    constructor(counting: Counting) {
        this.id = counting.id;
        this.question = counting.question;
        this.options = counting.options;
    }
}
