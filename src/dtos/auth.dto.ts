import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator'

export class LoginDTO {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(6)
  password: string
}

export class SignUpDTO {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(6)
  password: string

  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsString()
  @IsNotEmpty()
  lastName: string
}
