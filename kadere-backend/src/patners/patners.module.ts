import { Module } from '@nestjs/common';

import { PatnersController } from './patners.controller';
import { PatnersService } from './patners.service';

@Module({
  controllers: [PatnersController],
  providers: [PatnersService],
})
export class PatnersModule {}
