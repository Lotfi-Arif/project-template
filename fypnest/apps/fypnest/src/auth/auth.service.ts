import { AccountStatus } from '@app/common/generated/index/prisma/account-status.enum';
import { Role } from '@app/common/generated/index/prisma/role.enum';
import { User } from '@app/common/generated/index/user/user.model';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from '../users/password.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly passwordService: PasswordService,
  ) {}

  async login(email: string, password: string, role: Role): Promise<any> {
    const model = role.toLowerCase();

    const user = await this.prisma[model as any].findUnique({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException('USER_NOT_FOUND');
    }
    if (user.accountStatus == AccountStatus.UNVERIFIED) {
      throw new UnauthorizedException('UNVERIFIED_EMAIL');
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password,
    );

    if (!passwordValid) {
      throw new BadRequestException('INVALID_CREDENTIALS');
    }

    return {
      userId: user.id,
      role: role,
    };
  }

  validateUser(userId: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: { staff: true, student: true, counselor: true },
    });
  }
}
