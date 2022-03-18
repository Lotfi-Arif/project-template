import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Asset } from '@app/common/generated/index/asset/asset.model';
import { AssetsService } from './assets.service';
import { FindManyAssetArgs } from '@app/common/generated/index/asset/find-many-asset.args';
import { CreateOneAssetArgs } from '@app/common/generated/index/asset/create-one-asset.args';
import { DeleteOneAssetArgs } from '@app/common/generated/index/asset/delete-one-asset.args';
import { UpdateOneAssetArgs } from '@app/common/generated/index/asset/update-one-asset.args';
import { FindUniqueAssetArgs } from '@app/common/generated/index/asset/find-unique-asset.args';

@Resolver(() => Asset)
export class AssetsResolver {
  constructor(private readonly assetsService: AssetsService) {
  }

  @Query(() => Asset)
  async findAllAssets(@Args() assetFindManyArgs: FindManyAssetArgs, @Info() info) {
    try {
      const assets = new PrismaSelect(info).value
      return this.assetsService.findAll({ ...assetFindManyArgs, ...assets })
    } catch (error) {
      console.error(error);
    }

  }

  @Mutation(() => Asset)
  async findOneAsset(@Args() assetFindUnique: FindUniqueAssetArgs, @Info() info) {
    try {
      const asset = new PrismaSelect(info).value;
      return this.assetsService.findOne({ ...assetFindUnique, ...asset })
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Asset)
  async createAsset(@Args() assetCreateArgs: CreateOneAssetArgs, @Info() info) {
    try {
      const newAsset = new PrismaSelect(info).value;
      return this.assetsService.createAsset({ ...assetCreateArgs, ...newAsset })
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Asset)
  async updateAsset(@Args() assetUpdateArgs: UpdateOneAssetArgs, @Info() info) {
    try {
      const update = new PrismaSelect(info).value;
      return this.assetsService.updateAsset({ ...assetUpdateArgs, ...update })
    } catch (error) {
      console.error(error);
    }

  }

  @Mutation(() => Asset)
  async deleteAsset(@Args() assetDeletArgs: DeleteOneAssetArgs, @Info() info) {
    try {
      const asset = new PrismaSelect(info).value;
      return this.assetsService.deleteAsset({ ...assetDeletArgs, ...asset })
    } catch (error) {
      console.error(error);
    }
  }
}