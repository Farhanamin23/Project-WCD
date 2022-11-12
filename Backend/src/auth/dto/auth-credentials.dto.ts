/* eslint-disable prettier/prettier */
import { IsString, MaxLength, MinLength, Matches } from 'class-validator';
export class AuthCredentialDto {
  @IsString()
  @MinLength(20)
  @MaxLength(40)
  username: string;

  @IsString()
  @MinLength(20)
  @MaxLength(30)
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(14)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password harus combinasi',
  })
  password: string;
}
