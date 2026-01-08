import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';  
import { PatnersService } from './patners.service';
import { DriverDto } from '../dto/driver.dto';

@Controller('patners')
export class PatnersController {
    constructor(private patnersService: PatnersService) {}
    Post('register')
    async registerDriver(@Body() driverDto: DriverDto) {
        this
    }
}
