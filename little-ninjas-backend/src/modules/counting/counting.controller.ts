import { Body, Controller, Get, HttpCode, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiInternalServerErrorResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../decorators/caller.decorator';
import { TransformInterceptor } from '../../dispatchers/transform.interceptor';
import { Counting } from '../../entities/counting.entity';
import { AuthGuard } from '../../guards/auth.guard';
import { JwtTokenInterface } from '../../interfaces/jwt.token.interface';
import { SuccessResponse } from '../../interfaces/response';
import { CountingService } from './counting.service';
import { CountingDto } from './dto/counting.dto';
import { CountingResponseDto } from './dto/counting.response.dto';
import { CountValidateDto } from './dto/countValidate.dto';

@Controller('counting')
@ApiTags('Counting Module')
@UseInterceptors(TransformInterceptor)
@UseGuards(AuthGuard)
@ApiBearerAuth()

export class CountingController {
  constructor(private readonly countingService: CountingService) {}

  @ApiOperation({ summary: 'Add Counting Data to the Database' })
  @ApiResponse({ status: 200, description: 'Success', type: Counting })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Post('postdata')
  @HttpCode(200)

  async postData(@Body() countingDto: CountingDto) {
    const data = await this.countingService.postData(countingDto);
    return { data: data };
  }

  @ApiOperation({ summary: 'List Counting data' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('all-data')
  @HttpCode(200)

  async list() {
    const data = await this.countingService.list();
    return { data };
  }

  @ApiOperation({ summary: 'Get particular data based on id' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('specific/:id')
  @HttpCode(200)

  async details(@Param('id') id: string) {
    const data = await this.countingService.getspecific(id);
    return { data };
  }

  @ApiOperation({ summary: 'Get Random Data' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('/get-random-data')
  @HttpCode(200)

  async getRandomQuestions(@User() user: JwtTokenInterface): Promise<SuccessResponse<CountingResponseDto[]>>{
    const data = await this.countingService.getrandomquestions(user);
    return { data };
  }

  @ApiOperation({ summary: 'Validate Counting Data' })
  @ApiResponse({ status: 200, description: 'Success', type: CountValidateDto })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Post('validate')
  @HttpCode(200)

  async validateAnswer(@Body() countValidateDto: CountValidateDto): Promise<SuccessResponse<string>> {
    const data = await this.countingService.validateAnswer(countValidateDto);
    return { data };
  }
}
