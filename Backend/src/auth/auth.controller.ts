/* eslint-disable prettier/prettier */
// import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Body, Post, Controller } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  signUp(@Body() authCrendtialDto: AuthCredentialDto): Promise<void> {
    return this.authService.signUp(authCrendtialDto);
  }
  @Post('/login')
  signIn(
    @Body() authCrendtialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCrendtialDto);
  }

  // @Post('/test')
  // @UseGuards(AuthGuard())
  // test(@Req() req) {
  //   console.log(req);
  // }
}
