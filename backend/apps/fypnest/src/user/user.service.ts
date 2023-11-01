import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@app/prisma-generated/generated/nestgraphql/user/user.model';
import { UserCreateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-create.input';
import { UserUpdateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-update.input';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new user.
   * @param data - Data to create the user with.
   * @returns The created user.
   */
  async createUser(data: UserCreateInput): Promise<User> {
    this.logger.log('Creating a new user');
    return this.prisma.user.create({ data });
  }

  /**
   * Retrieve all users.
   * @param params - Optional pagination parameters.
   * @returns List of users.
   */
  async getAllUsers(
    params: { skip?: number; take?: number } = {},
  ): Promise<User[]> {
    const { skip, take } = params;
    this.logger.log(
      `Fetching users with pagination - skip: ${skip}, take: ${take}`,
    );
    return this.prisma.user.findMany({ skip, take });
  }

  /**
   * Retrieve a user by their ID.
   * @param id - User ID.
   * @returns The user or null if not found.
   */
  async getUserById(id: string): Promise<User | null> {
    this.logger.log(`Fetching user by id: ${id}`);
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  /**
   * Update a user by their ID.
   * @param params - Update parameters.
   * @returns The updated user.
   */
  async updateUser(params: {
    id: string;
    data: UserUpdateInput;
  }): Promise<User> {
    const { id, data } = params;
    this.logger.log(`Updating user with id: ${id}`);
    return this.prisma.user.update({ where: { id }, data });
  }

  /**
   * Delete a user by their ID.
   * @param id - User ID.
   * @returns The deleted user.
   */
  async deleteUser(id: string): Promise<User> {
    this.logger.log(`Deleting user with id: ${id}`);
    return this.prisma.user.delete({ where: { id } });
  }
}
