import { Body, Controller, Get, HttpCode, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiInternalServerErrorResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Identify } from '../../entities/identify.entity';
import { AuthGuard } from '../../guards/auth.guard';
import { IdentifyDto } from './dto/identify.dto';
import { IdentifyValidateDto } from './dto/identifyValidate.dto';
import { IdentifyService } from './identify.service';
import { User } from '../../decorators/caller.decorator';
import { JwtTokenInterface } from '../../interfaces/jwt.token.interface';
import { TransformInterceptor } from '../../dispatchers/transform.interceptor';
import { SuccessResponse } from '../../interfaces/response';
import { IdentifyResponseDto } from './dto/identify.response.dto';

@Controller('identify')
@ApiTags('Identify Module')
@UseInterceptors(TransformInterceptor)
@UseGuards(AuthGuard)
@ApiBearerAuth()

export class IdentifyController {
  constructor(private readonly identifyService: IdentifyService) {}
  
  @ApiOperation({ summary: 'Add Identify Data to the Database' })
  @ApiResponse({ status: 200, description: 'Success', type: Identify})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Post('postdata')
  @HttpCode(200)

  async postData(@Body() identifyDto: IdentifyDto) {
    const data = await this.identifyService.postData(identifyDto);
    return { data: data };
  }

  @ApiOperation({ summary: 'List identify data' })
  @ApiResponse({ status: 200, description: 'Success'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('all-data')
  @HttpCode(200)
  async list() {
    const data = await this.identifyService.list();
    return { data };
  }

  @ApiOperation({ summary: 'Get particular data based on question' })
  @ApiResponse({ status: 200, description: 'Success'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('specific/:question')
  @HttpCode(200)
  async details(@Param('question') question: string) {
    const data = await this.identifyService.getspecific(question);
    return { data };
  }

  @ApiOperation({ summary: 'Get Random Data' })
  @ApiResponse({ status: 200, description: 'Success'})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('/get-random-data')
  @HttpCode(200)

  async getRandomQuestions(@User() user: JwtTokenInterface): Promise<SuccessResponse<IdentifyResponseDto[]>> {
    const data = await this.identifyService.getrandomquestions(user);
    return { data };
  }

  @ApiOperation({ summary: 'Validate Identify Data' })
  @ApiResponse({ status: 200, description: 'Success', type: IdentifyValidateDto})
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Post('validate')
  @HttpCode(200)
  async validateAnswer(@Body() identifyValidateDto: IdentifyValidateDto): Promise<SuccessResponse<string>>{
    const data =  await this.identifyService.validateAnswer(identifyValidateDto);
    return { data };
  }
}
