import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Auth } from 'libs/prisma/src/generated/nestgraphql/auth/auth.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  /**
   * Registers a user.
   * @returns Auth object with details of the created user.
   */
  async register(
    username: string,
    password: string,
    email: string,
  ): Promise<Auth> {
    this.logger.log('Registering a new user');

    // Check if the user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        email,
        password,
        auth: {
          create: {
            username,
            password, // TODO: Encrypt this password before saving
          },
        },
      },
      include: {
        auth: true,
      },
    });

    return user.auth;
  }

  /**
   * Authenticates a user.
   * @returns JWT token string if successful, throws an error otherwise.
   */
  async login(username: string, password: string): Promise<string> {
    this.logger.log(`Authenticating user with username: ${username}`);

    const auth = await this.prisma.auth.findUnique({ where: { username } });
    if (!auth || auth.password !== password) {
      // TODO: Use encrypted password check here
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: auth.username, userId: auth.userId };
    return this.jwtService.sign(payload);
  }
}
