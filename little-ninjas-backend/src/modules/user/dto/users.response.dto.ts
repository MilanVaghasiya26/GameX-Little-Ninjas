import { ApiProperty } from '@nestjs/swagger';
import { Users } from '../../../entities/user.entity';

export class UsersResponseDto {
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly user_name: string;

    @ApiProperty()
    readonly token: string;

    @ApiProperty()
    readonly resolved_question: string[];

    constructor(users: Users) {
        this.id = users.id;
        this.user_name = users.user_name;
        this.token = users.token;
        this.resolved_question = users.resolved_question;
    }
}
