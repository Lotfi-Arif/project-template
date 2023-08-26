// user.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from 'libs/prisma/src/generated/nestgraphql/user/user.model';
import { UserCreateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-create.input';
import { UserUpdateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-update.input';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private prisma: PrismaService) {}

  async createUser(data: UserCreateInput): Promise<User> {
    this.logger.log('Creating a new user');
    return this.prisma.user.create({ data });
  }

  async getUserById(id: string): Promise<User | null> {
    this.logger.log(`Fetching user by id: ${id}`);
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    this.logger.log(`Fetching user by email: ${email}`);
    return this.prisma.user.findUnique({ where: { email } });
  }

  async updateUser(params: {
    id: string;
    data: UserUpdateInput;
  }): Promise<User> {
    const { id, data } = params;
    this.logger.log(`Updating user with id: ${id}`);
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: string): Promise<User> {
    this.logger.log(`Deleting user with id: ${id}`);
    return this.prisma.user.delete({ where: { id } });
  }

  async getUsers(params: { skip?: number; take?: number }): Promise<User[]> {
    const { skip, take } = params;
    this.logger.log(
      `Fetching users with pagination - skip: ${skip}, take: ${take}`,
    );
    return this.prisma.user.findMany({ skip, take });
  }
}
