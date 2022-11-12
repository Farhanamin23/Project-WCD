/* eslint-disable prettier/prettier */
import { JwtPayload } from './jwt/jwt-payload.intefaces';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user/user.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt/dist';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.userRepository.createUser(authCredentialDto);
  }

  async signIn(
    authCrendtialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCrendtialDto;
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Wrong Crendtials');
    }
  }
}
