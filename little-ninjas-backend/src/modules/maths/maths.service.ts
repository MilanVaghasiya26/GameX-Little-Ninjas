import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Maths } from '../../entities/maths.entity';
import { Users } from '../../entities/user.entity';
import { JwtTokenInterface } from '../../interfaces/jwt.token.interface';
import { MathDto } from './dto/math.dto';
import { MathsResponseDto } from './dto/maths.response.dto';
import { MathValidateDto } from './dto/mathValidate.dto';

@Injectable()
export class MathsService {
  constructor(
    @Inject('MATHS_REPOSITORY')
    private readonly MATHS_REPOSITORY: typeof Maths,
    @Inject('USER_REPOSITORY')
    private readonly USER_REPOSITORY: typeof Users,
  ) {}

  async postData(mathDto: MathDto) {
    const data = mathDto.question;
    const dataExist = await this.MATHS_REPOSITORY.findOne({
      where: { question: data },
    });
    if (dataExist) {
      throw new BadRequestException('DATA ALREADY EXISTS');
    }
    const postdata = await this.MATHS_REPOSITORY.create({
      category: mathDto.category,
      question: mathDto.question,
      answer: mathDto.answer,
      options: mathDto.options,
    });
    return postdata;
  }

  async list() {
    const counting = await this.MATHS_REPOSITORY.findAll({
      attributes: ['id', 'question', 'options'],
    });
    if (!counting) {
      throw new BadRequestException('Invalid operations');
    }
    return counting;
  }

  async getspecific(id: string) {
    const counting = await this.MATHS_REPOSITORY.findOne({
      attributes: ['id', 'question', 'options'],
      where: {
        id,
      },
    });
    if (!counting) {
      throw new BadRequestException('Invalid id');
    }
    return counting;
  }

  async getrandomquestions(
    operations: string,
    user: JwtTokenInterface,
  ): Promise<MathsResponseDto[]> {
    const userData: any = await this.USER_REPOSITORY.findOne({
      where: {
        id: user.id,
      },
    });
    const maths = await this.MATHS_REPOSITORY.findAll({
      attributes: ['id', 'question', 'options'],
      where: {
        category: operations,
        id: { [Op.notIn]: userData.resolved_question },
      },
      order: [Sequelize.fn('RANDOM')],
      limit: 1,
    });

    if (!maths) {
      throw new BadRequestException('Invalid id');
    }

    // store array values in a variable
    let arr = userData.resolved_question;

    //push question into the array
    arr.push(maths[0].id);

    //update column
    const updated_column = await this.USER_REPOSITORY.update(
      {
        resolved_question: arr,
      },
      {
        where: { user_name: userData.user_name },
      },
    );

    if (arr.length == 30) {
      const reset = await this.USER_REPOSITORY.update(
        {
          resolved_question: [],
        },
        {
          where: { user_name: userData.user_name },
        },
      );
    }
    return maths;
  }

  async validateAnswer(mathValidateDto: MathValidateDto): Promise<string> {
    const user: any = await this.MATHS_REPOSITORY.findOne({
      where: {
        id: mathValidateDto.id,
      },
    });

    if (mathValidateDto.options == user.answer) {
      return 'Right Answer';
    } else {
      return 'Wrong answer';
    }
  }
}
