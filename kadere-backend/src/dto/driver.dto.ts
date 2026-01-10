import { IsString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class DriverDto {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  username?: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName?: string;

  @IsString()
  phone?: string;
}
