import { Body, Controller, Get, HttpCode, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiInternalServerErrorResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../decorators/caller.decorator';
import { TransformInterceptor } from '../../dispatchers/transform.interceptor';
import { Maths } from '../../entities/maths.entity';
import { AuthGuard } from '../../guards/auth.guard';
import { JwtTokenInterface } from '../../interfaces/jwt.token.interface';
import { SuccessResponse } from '../../interfaces/response';
import { MathDto } from './dto/math.dto';
import { MathsResponseDto } from './dto/maths.response.dto';
import { MathValidateDto } from './dto/mathValidate.dto';
import { MathsService } from './maths.service';

@Controller('maths')
@ApiTags('Maths Module')
@UseInterceptors(TransformInterceptor)
@UseGuards(AuthGuard)
@ApiBearerAuth()

export class MathsController {
  constructor(private readonly mathsService: MathsService) {}

  @ApiOperation({ summary: 'Add Maths Data to the Database' })
  @ApiResponse({ status: 200, description: 'Success', type: Maths })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Post('postdata')
  @HttpCode(200)

  async postData(@Body() mathDto: MathDto) {
    const data = await this.mathsService.postData(mathDto);
    return { data: data };
  }

  @ApiOperation({ summary: 'List Maths data' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('all-data')
  @HttpCode(200)

  async list() {
    const data = await this.mathsService.list();
    return { data };
  }

  @ApiOperation({ summary: 'Get particular data based on id' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('specific/:id')
  @HttpCode(200)

  async details(@Param('id') id: string) {
    const data = await this.mathsService.getspecific(id);
    return { data };
  }

  @ApiOperation({ summary: 'Get Random Data based on operations' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Get('/get-random-data/:operations')
  @HttpCode(200)

  async getRandomQuestions(@Param('operations') operations: string, @User() user: JwtTokenInterface): Promise<SuccessResponse<MathsResponseDto[]>>{
    const data = await this.mathsService.getrandomquestions(operations, user);
    return { data };
  }

  @ApiOperation({ summary: 'Validate maths Data' })
  @ApiResponse({ status: 200, description: 'Success', type: MathValidateDto })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Post('validate')
  @HttpCode(200)
  
  async validateAnswer(@Body() mathValidateDto: MathValidateDto): Promise<SuccessResponse<string>>{
    const data = await this.mathsService.validateAnswer(mathValidateDto);
    return { data };
  }
}
