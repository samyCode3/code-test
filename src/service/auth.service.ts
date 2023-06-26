import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { ICreateUser, ILogin } from '../interfaces/user.interface';
import { config } from 'dotenv';
config();
import { Encryption } from '../common/hashing';
const hashing = new Encryption();
@Injectable()
export class AuthService {
  private readonly user = User;
  async create(payload: ICreateUser) {
    const { email, password } = payload;
    const findUser = await this.user.findOne({ where: { email } });
    if (findUser) {
      throw {
        ok: false,
        status: 400,
        message: 'Email is already used',
      };
    }
    payload.password = hashing.encryptData(password);
    const user = await this.user.create(payload);
    return {
      ok: true,
      status: 200,
      message: 'User is created',
      body: { user },
    };
  }

  async login(payload: ILogin) {
    const { password, email } = payload;
    const user = await this.user.findOne({ where: { email } });
    if (!user) {
      throw {
        ok: false,
        status: 400,
        message: 'Incorrect Email or password provided',
      };
    }

    const isValid = await hashing.comparedPassword(password, user.password);
    if (!isValid) {
      throw {
        ok: false,
        status: 400,
        message: 'Incorrect Email or password provided',
      };
    }
    const token = hashing.Jwt_Token(user);
    return {
      ok: true,
      status: 200,
      message: 'login was successfull',
      body: { user, token },
    };
  }
}
