import { Module } from '@nestjs/common';
import { identifyProviders } from '../../providers/identify.providers';
import { usersProviders } from '../../providers/users.providers';
import { IdentifyController } from './identify.controller';
import { IdentifyService } from './identify.service';

@Module({
  controllers: [IdentifyController],
  providers: [IdentifyService, ...identifyProviders, ...usersProviders],
})
export class IdentifyModule {}
