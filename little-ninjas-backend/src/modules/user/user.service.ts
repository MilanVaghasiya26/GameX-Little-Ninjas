import { Inject, Injectable } from '@nestjs/common';
import { Users } from '../../entities/user.entity';
import { JwtTokenInterface } from '../../interfaces/jwt.token.interface';
import { JwtHelper } from '../../utils/jwt.helper';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly USER_REPOSITORY: typeof Users,
    private readonly jwtToken: JwtHelper,
  ) {}

  async register(registerDto: RegisterDto): Promise<any> {
    const username = registerDto.user_name;

    const Exist = await this.USER_REPOSITORY.findOne({
      where: { user_name: username },
    });

    try {
      if (!username) {
        return { message: 'Please Enter A Name' };
      } else if (Exist) {
        const tokenDto: JwtTokenInterface = {
          user_name: username,
          id: Exist.id,
        };
        const jwtToken1 = await this.jwtToken.generateToken(tokenDto);

        const updateToken = await this.USER_REPOSITORY.update(
          { token: `${jwtToken1}`, resolved_question: [] },
          { where: { user_name: tokenDto.user_name } },
        );

        const newData = await this.USER_REPOSITORY.findOne({
          attributes: ['id', 'user_name', 'token', 'resolved_question'],
          where: { user_name: username },
        });

        return newData;
      } else {
        const newUser = await this.USER_REPOSITORY.create({
          user_name: registerDto.user_name,
        });

        const tokenDto = {
          user_name: username,
          id: newUser.id,
        };

        const jwttoken = await this.jwtToken.generateToken(tokenDto);
        await this.USER_REPOSITORY.update(
          { token: `${jwttoken}` },
          { where: { user_name: registerDto.user_name } },
        );

        const newData = await this.USER_REPOSITORY.findOne({
          attributes: ['id', 'user_name', 'token', 'resolved_question'],
          where: { user_name: username },
        });
        return newData;
      }
    } catch (error) {
      return { message: 'Enter valid data' };
    }
  }
}
