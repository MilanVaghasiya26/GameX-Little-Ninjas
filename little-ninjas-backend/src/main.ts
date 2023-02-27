import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { swagger } from './swagger';
import { AllExceptionsFilter } from './dispatchers/all-exceptions.filter';
import { ValidationPipe } from './validations/validation.pipe';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  const port = process.env.NODE_PORT || 3000;

  swagger(app);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe());

  app.use(cors());
  await app.listen(port);
  console.log(`Application start on port ${port} ${process.env.NODE_ENV}`);
}
bootstrap();
