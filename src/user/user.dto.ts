import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  // Add other properties as needed with appropriate validation decorators
}

export class UpdateUserDto {
  @IsString()
  readonly username?: string;

  @IsEmail()
  readonly email?: string;

  // Add other properties as needed with appropriate validation decorators
}
