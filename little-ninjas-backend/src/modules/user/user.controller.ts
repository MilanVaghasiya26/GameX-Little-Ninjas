import { Body, Controller, HttpCode, Post, UseInterceptors } from '@nestjs/common';
import { ApiConflictResponse, ApiInternalServerErrorResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from '../../dispatchers/transform.interceptor';
import { RegisterDto } from './dto/register.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('Register')
@UseInterceptors(TransformInterceptor)

export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'To register a user' })
  @ApiResponse({ status: 201, description: 'Registered successfully' })
  @ApiConflictResponse({ description: 'Already exists' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Post('register')
  @HttpCode(200)
  async userRegister(
    @Body() registerDto: RegisterDto,
  ): Promise<any>
  {
    const data = await this.userService.register(registerDto);
    return { data};
  }
}
