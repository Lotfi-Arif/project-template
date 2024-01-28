import {
  Injectable,
  NotFoundException,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  Auth,
  AuthCreateInput,
  AuthUpdateInput,
  Login,
  User,
} from '@tradetrove/shared-types';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }

  async login(user: Omit<User, 'password'>): Promise<Login> {
    try {
      const payload = { email: user.email, sub: user.id };
      const access_token = this.jwtService.sign(payload);

      return {
        access_token,
        token_type: 'Bearer', // Specify the token type
      };
    } catch (error) {
      throw new InternalServerErrorException('Error generating token');
    }
  }

  async create(createAuthDto: AuthCreateInput): Promise<Auth> {
    this.logger.log('Creating a new auth record');
    return this.prisma.auth.create({
      data: createAuthDto,
    });
  }

  async findAll(): Promise<Auth[]> {
    return this.prisma.auth.findMany();
  }

  async findOne(id: string): Promise<Auth | null> {
    const auth = await this.prisma.auth.findUnique({
      where: { id },
    });
    if (!auth) {
      throw new NotFoundException(`Auth record not found for ID ${id}`);
    }
    return auth;
  }

  async update(id: string, updateAuthDto: AuthUpdateInput): Promise<Auth> {
    try {
      return await this.prisma.auth.update({
        where: { id },
        data: updateAuthDto,
      });
    } catch (error) {
      this.logger.error(`Error updating auth record: ${error}`);
      throw new InternalServerErrorException('Error updating auth record');
    }
  }

  async remove(id: string): Promise<Auth> {
    try {
      this.logger.log(`Deleting auth record with ID ${id}`);
      return await this.prisma.auth.delete({
        where: { id },
      });
    } catch (error) {
      this.logger.error(`Error deleting auth record: ${error}`);
      throw new InternalServerErrorException('Error deleting auth record');
    }
  }
}
