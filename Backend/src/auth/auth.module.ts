import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from './user/user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStartegy } from './jwt/jwt.startegy';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: {
        expiresIn: 3700,
      },
    }),
  ],
  providers: [AuthService, PassportModule, JwtStartegy, UserRepository],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
