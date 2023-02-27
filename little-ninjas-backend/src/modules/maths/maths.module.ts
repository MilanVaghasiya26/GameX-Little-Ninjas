import { Module } from '@nestjs/common';
import { mathsProviders } from '../../providers/maths.providers';
import { usersProviders } from '../../providers/users.providers';
import { MathsController } from './maths.controller';
import { MathsService } from './maths.service';

@Module({
  controllers: [MathsController],
  providers: [MathsService, ...mathsProviders, ...usersProviders],
})
export class MathsModule {}
