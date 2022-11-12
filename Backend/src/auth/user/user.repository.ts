/* eslint-disable prettier/prettier */
import { AuthCredentialDto } from './../dto/auth-credentials.dto';
import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, email, password } = authCredentialDto;
    // hasing password nya
    const salt = await bcrypt.genSalt();
    console.log(salt)
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(hashedPassword)
    const user = this.create({ username, email, password: hashedPassword });
    try {
      await this.save(user);
      console.log(user)
    } catch (error) {
      if (error.code === '23005') {
        console.log(error.code)
        // duplicate username nya
        throw new ConflictException('Username Already Exits');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

}
