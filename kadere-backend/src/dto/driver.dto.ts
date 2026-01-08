import { IsString } from 'class-validator';

export class DriverDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName?: string;

  @IsString()
  username?: string;

  @IsString()
  phone?: string;
}
