import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { Users } from '../entities/user.entity';
import { JwtTokenInterface } from '../interfaces/jwt.token.interface';

@Injectable()
export class JwtHelper {
  public async generateToken(tokenDto: JwtTokenInterface) {
    const token = jwt.sign(tokenDto, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRED_TIME,
    });
    return token;
  }

  public async verify(token: string): Promise<any> {
    try {
      const varifiedUser = jwt.verify(
        token,
        process.env.JWT_SECRET,
      ) as JwtTokenInterface;
      const session = await Users.findOne({
        where: { token: token },
      });
      if (!session) {
        return false;
      }
        return { id: session.id, user_name: session.user_name, token: session.token };
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  public getTokenFromHeader(request: Request): string {
    let token =
      request.headers['x-access-token'] || request.headers['authorization'];
    if (Array.isArray(token)) {
      token = token[0];
    }
    if (token && token.startsWith('Bearer ')) {
      // Remove Bearer from string
      return (token = token.slice(7, token.length));
    }
    return token;
  }
}
