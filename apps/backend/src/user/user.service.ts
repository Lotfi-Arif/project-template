import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  User,
  UserCreateInput,
  UserUpdateInput,
} from '@tradetrove/shared-types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: UserCreateInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10); // Hash the password
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword, // Store the hashed password
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
