import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Identify } from '../../entities/identify.entity';
import { IdentifyValidateDto } from './dto/identifyValidate.dto';
import { Users } from '../../entities/user.entity';
import { JwtTokenInterface } from '../../interfaces/jwt.token.interface';
import { Op } from 'sequelize';
import { IdentifyResponseDto } from './dto/identify.response.dto';
import { IdentifyDto } from './dto/identify.dto';

@Injectable()
export class IdentifyService {
  constructor(
    @Inject('IDENTIFY_REPOSITORY')
    private readonly IDENTIFY_REPOSITORY: typeof Identify,
    @Inject('USER_REPOSITORY')
    private readonly USER_REPOSITORY: typeof Users,
  ) {}

  async postData(identifyDto: IdentifyDto) {
    const data = identifyDto.question;
    const dataExist = await this.IDENTIFY_REPOSITORY.findOne({
      where: { question: data },
    });
    if (dataExist) {
      throw new BadRequestException('DATA ALREADY EXISTS');
    }
    const postdata = await this.IDENTIFY_REPOSITORY.create({
      question: identifyDto.question,
      answer: identifyDto.answer,
      options: identifyDto.options,
    });
    return postdata;
  }

  async list() {
    const identify = await this.IDENTIFY_REPOSITORY.findAll({
      attributes: ['id', 'question', 'options'],
      order: ['question'],
      group: ['id'],
    });
    if (!identify) {
      throw new BadRequestException('Invalid identify');
    }
    return identify;
  }

  async getspecific(question: string) {
    const identify = await this.IDENTIFY_REPOSITORY.findOne({
      attributes: ['id', 'question', 'options'],
      where: {
        question,
      },
    });
    if (!identify) {
      throw new BadRequestException('Invalid questionName');
    }
    return identify;
  }

  async getrandomquestions(
    user: JwtTokenInterface,
  ): Promise<IdentifyResponseDto[]> {
    const userData: any = await this.USER_REPOSITORY.findOne({
      where: {
        id: user.id,
      },
    });

    const identify = await this.IDENTIFY_REPOSITORY.findAll({
      attributes: ['id', 'question', 'options'],
      where: { id: { [Op.notIn]: userData.resolved_question } },
      order: [Sequelize.fn('RANDOM')],
      limit: 1,
    });

    if (!identify) {
      throw new BadRequestException('Invalid');
    }

    // store array values in a variable
    let arr = userData.resolved_question;

    //push question into the array
    arr.push(identify[0].id);

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
    return identify;
  }

  async validateAnswer(
    identifyValidateDto: IdentifyValidateDto,
  ): Promise<string> {
    const user: any = await this.IDENTIFY_REPOSITORY.findOne({
      where: {
        id: identifyValidateDto.id,
      },
    });

    if (identifyValidateDto.options == user.answer) {
      return 'Right Answer';
    } else {
      return 'Wrong answer';
    }
  }
}
