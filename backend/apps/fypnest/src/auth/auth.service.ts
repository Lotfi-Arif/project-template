import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { User } from 'libs/prisma/src/generated/nestgraphql/user/user.model';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(data: Prisma.UserCreateInput): Promise<User> {
    this.logger.log(`Registering user with email: ${data.email}`);
    const user = await this.userService.createUser(data);
    return user;
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.getUserByEmail(email);
    if (user && user.password === password) {
      this.logger.log(`User validation successful for email: ${email}`);
      return user;
    }
    this.logger.log(`User validation failed for email: ${email}`);
    return null;
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.validateUser(email, password);

    if (!user) {
      this.logger.log(`Login failed for email: ${email}`);
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { email: user.email, sub: user.id };
    this.logger.log(`Login successful for email: ${email}`);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
