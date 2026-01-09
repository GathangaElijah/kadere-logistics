import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriverDto } from '../dto/driver.dto';

@Controller('patners')
export class DriversController {
  constructor(private driversService: DriversService) {}
  @Post('register')
  async registerDriver(@Body() driverDto: DriverDto) {
    return await this.driversService.registerDriver(driverDto);
  }
}
