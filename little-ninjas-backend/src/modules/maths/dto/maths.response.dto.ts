import { ApiProperty } from '@nestjs/swagger';
import { Maths } from '../../../entities/maths.entity';

export class MathsResponseDto {
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly question: string[];

    @ApiProperty()
    readonly options: number[];

    constructor(maths: Maths) {
        this.id = maths.id;
        this.question = maths.question;
        this.options = maths.options;
    }
}
