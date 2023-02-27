import { Module } from '@nestjs/common';
import { countingProviders } from '../../providers/counting.providers';
import { usersProviders } from '../../providers/users.providers';
import { CountingController } from './counting.controller';
import { CountingService } from './counting.service';

@Module({
  controllers: [CountingController],
  providers: [CountingService, ...countingProviders, ...usersProviders],
})
export class CountingModule {}
