import { Module } from '@nestjs/common';

import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { Driver } from './drivers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule {}
