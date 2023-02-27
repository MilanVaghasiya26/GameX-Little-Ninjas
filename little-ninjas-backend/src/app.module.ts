import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CountingModule } from './modules/counting/counting.module';
import { IdentifyModule } from './modules/identify/identify.module';
import { MathsModule } from './modules/maths/maths.module';
import { UserModule } from './modules/user/user.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [DatabaseModule, IdentifyModule, CountingModule, MathsModule, UserModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
