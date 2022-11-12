/* eslint-disable prettier/prettier */
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtPayload } from './jwt-payload.intefaces';
import { UserRepository } from './../user/user.repository';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class JwtStartegy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      secretOrKey: 'topSecret51',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { email } = payload;
    const user: User = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
