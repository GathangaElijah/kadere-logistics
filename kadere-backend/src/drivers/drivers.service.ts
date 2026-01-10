import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverDto } from 'src/dto/driver.dto';
import { Repository } from 'typeorm';
import { Driver } from './drivers.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver)
    private driversRepository: Repository<Driver>,
  ) {}

  // Consider using the QueryQunner
  async registerDriver(driverData: DriverDto) {
    console.log(driverData);
    return await this.driversRepository.save(driverData);
  }
}
