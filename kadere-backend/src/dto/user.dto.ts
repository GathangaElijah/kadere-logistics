import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username!: string;

  @IsString()
  phoneNumber!: string;

  @IsNumber()
  password!: number;
}
