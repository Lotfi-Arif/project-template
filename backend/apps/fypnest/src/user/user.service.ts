import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@app/prisma-generated/generated/nestgraphql/user/user.model';
import { UserCreateInput } from '@app/prisma-generated/generated/nestgraphql/user/user-create.input';
import { Prisma } from '@prisma/client';
import { handlePrismaError } from '@app/common/utils';

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
    try {
      this.logger.log('Creating a new user');
      return this.prisma.user.create({ data });
    } catch (error) {
      this.logger.error('Failed to create user', error.stack);
      handlePrismaError(error, 'Failed to create user');
    }
  }

  /**
   * Retrieve all users.
   * @param params - Optional pagination parameters.
   * @returns List of users.
   */
  async getAllUsers(
    params: { skip?: number; take?: number } = {},
  ): Promise<User[]> {
    try {
      const { skip, take } = params;
      this.logger.log(
        `Fetching users with pagination - skip: ${skip}, take: ${take}`,
      );
      return this.prisma.user.findMany({ skip, take });
    } catch (error) {
      this.logger.error('Failed to retrieve users', error.stack);
      handlePrismaError(error, 'Failed to retrieve users');
    }
  }

  /**
   * Retrieve a user by their ID.
   * @param id - User ID.
   * @returns The user or null if not found.
   */
  async getUserById(id: string): Promise<User | null> {
    try {
      this.logger.log(`Fetching user by id: ${id}`);
      const user = await this.prisma.user.findUnique({ where: { id } });
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      this.logger.error(`Failed to retrieve user with ID ${id}`, error.stack);
      handlePrismaError(error, `Failed to retrieve user with ID ${id}`);
    }
  }

  /**
   * Update a user by their ID.
   * @param params - Update parameters.
   * @returns The updated user.
   */
  async updateUser(params: {
    id: string;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    try {
      const { id, data } = params;
      this.logger.log(`Updating user with id: ${id}`);
      // Use type assertion to avoid deep type comparison
      return this.prisma.user.update({
        where: { id },
        data,
      });
    } catch (error) {
      this.logger.error(
        `Failed to update user with ID ${params.id}`,
        error.stack,
      );
      handlePrismaError(error, `Failed to update user with ID ${params.id}`);
    }
  }

  /**
   * Delete a user by their ID.
   * @param id - User ID.
   * @returns The deleted user.
   */
  async deleteUser(id: string): Promise<User> {
    try {
      this.logger.log(`Deleting user with id: ${id}`);
      return this.prisma.user.delete({ where: { id } });
    } catch (error) {
      this.logger.error(`Failed to delete user with ID ${id}`, error.stack);
      handlePrismaError(error, `Failed to delete user with ID ${id}`);
    }
  }
}
