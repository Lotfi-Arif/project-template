import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma'
import { Prisma } from '@prisma/client';

@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService) { }

  async findAll(assetFindManyArgs: Prisma.AssetFindManyArgs) {
    return this.prisma.asset.findMany(assetFindManyArgs);
  }
  async findOne(assetFindOneArgs: Prisma.AssetFindUniqueArgs) {
    return this.prisma.asset.findUnique(assetFindOneArgs);
  }
  async createAsset(assetCreateOneArgs: Prisma.AssetCreateArgs) {
    return this.prisma.asset.create(assetCreateOneArgs);
  }
  async updateAsset(assetUpdateArgs: Prisma.AssetUpdateArgs) {
    return this.prisma.asset.update(assetUpdateArgs);
  }
  async deleteAsset(assetDeleteArgs: Prisma.AssetDeleteArgs) {
    return this.prisma.asset.delete(assetDeleteArgs);
  }
}