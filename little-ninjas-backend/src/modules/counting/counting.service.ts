import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Counting } from '../../entities/counting.entity';
import { Users } from '../../entities/user.entity';
import { JwtTokenInterface } from '../../interfaces/jwt.token.interface';
import { CountingDto } from './dto/counting.dto';
import { CountingResponseDto } from './dto/counting.response.dto';
import { CountValidateDto } from './dto/countValidate.dto';

@Injectable()
export class CountingService {
  constructor(
    @Inject('COUNTING_REPOSITORY')
    private readonly COUNTING_REPOSITORY: typeof Counting,
    @Inject('USER_REPOSITORY')
    private readonly USER_REPOSITORY: typeof Users,
  ) {}

  async postData(countingDto: CountingDto) {
    const data = countingDto.question;
    const dataExist = await this.COUNTING_REPOSITORY.findOne({
      where: { question: data },
    });
    if (dataExist) {
      throw new BadRequestException('DATA ALREADY EXISTS');
    }
    const postdata = await this.COUNTING_REPOSITORY.create({
      question: countingDto.question,
      answer: countingDto.answer,
      options: countingDto.options,
    });
    return postdata;
  }

  async list() {
    const counting = await this.COUNTING_REPOSITORY.findAll({
      attributes: ['id', 'question', 'options'],
    });
    if (!counting) {
      throw new BadRequestException('Invalid counting');
    }
    return counting;
  }

  async getspecific(id: string) {
    const counting = await this.COUNTING_REPOSITORY.findOne({
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
    user: JwtTokenInterface,
  ): Promise<CountingResponseDto[]> {
    const userData: any = await this.USER_REPOSITORY.findOne({
      where: {
        id: user.id,
      },
    });

    const counting = await this.COUNTING_REPOSITORY.findAll({
      attributes: ['id', 'question', 'options'],
      where: { id: { [Op.notIn]: userData.resolved_question } },
      order: [Sequelize.fn('RANDOM')],
      limit: 1,
    });

    if (!counting) {
      throw new BadRequestException('Invalid id');
    }

    // store array values in a variable
    let arr = userData.resolved_question;

    //push question into the array
    arr.push(counting[0].id);

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
    return counting;
  }

  async validateAnswer(countValidateDto: CountValidateDto): Promise<string> {
    const user: any = await this.COUNTING_REPOSITORY.findOne({
      where: {
        id: countValidateDto.id,
      },
    });

    if (countValidateDto.options == user.answer) {
      return 'Right Answer';
    } else {
      return 'Wrong answer';
    }
  }
}
