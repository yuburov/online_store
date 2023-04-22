import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @MinLength(5, {
    message: 'Password must be at least 5 characters long',
  })
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  name: string;
}
