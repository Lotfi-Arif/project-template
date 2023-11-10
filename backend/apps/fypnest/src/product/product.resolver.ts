import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from '@app/prisma-generated/generated/nestgraphql/product/product.model';
import { Logger, NotFoundException } from '@nestjs/common';
import { handleHttpError } from '@app/common/utils';
import { UpdateOneProductArgs } from '@app/prisma-generated/generated/nestgraphql/product/update-one-product.args';
import { PrismaSelect } from '@paljs/plugins';
import { DeleteOneProductArgs } from '@app/prisma-generated/generated/nestgraphql/product/delete-one-product.args';
import { CreateOneProductArgs } from '@app/prisma-generated/generated/nestgraphql/product/create-one-product.args';
import { FindManyProductArgs } from '@app/prisma-generated/generated/nestgraphql/product/find-many-product.args';

@Resolver(() => Product)
export class ProductResolver {
  private readonly logger = new Logger(ProductResolver.name);

  constructor(private readonly productService: ProductService) {}

  @Query(() => Product, { nullable: true })
  async product(@Args('id') id: string) {
    try {
      this.logger.log(`Fetching product with ID: ${id}`);
      const product = await this.productService.getProductById(id);
      if (!product) throw new NotFoundException('Product not found');
      return product;
    } catch (error) {
      this.logger.error(`Failed to retrieve product with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to retrieve product');
    }
  }

  @Query(() => [Product])
  async products(
    @Args() productFindManyArgs: FindManyProductArgs,
    @Info() info,
  ) {
    try {
      this.logger.log(
        `Fetching products with skip: ${productFindManyArgs.skip}, take: ${productFindManyArgs.take}`,
      );
      const products = new PrismaSelect(info).value;
      return await this.productService.getProducts({
        ...products,
        ...productFindManyArgs,
      });
    } catch (error) {
      this.logger.error('Failed to retrieve products', { error });
      throw handleHttpError(error, 'Failed to retrieve products');
    }
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createOneProductArgs') createOneProductArgs: CreateOneProductArgs,
    @Info() info,
  ) {
    try {
      this.logger.log('Creating a new product');
      const product = new PrismaSelect(info).value;
      const newProduct = await this.productService.createProduct({
        ...createOneProductArgs,
        ...product,
      });
      return newProduct;
    } catch (error) {
      this.logger.error('Failed to create a new product', { error });
      throw handleHttpError(error, 'Failed to create a new product');
    }
  }

  @Mutation(() => Product)
  async updateProduct(@Args('data') data: UpdateOneProductArgs, @Info() info) {
    try {
      this.logger.log(`Updating product with ID: ${data.where.id}`);
      const update = new PrismaSelect(info).value;
      const updatedProduct = await this.productService.updateProduct({
        ...data,
        ...update,
      });
      return updatedProduct;
    } catch (error) {
      this.logger.error(`Failed to update product with ID: ${data.where.id}`, {
        error,
      });
      throw handleHttpError(error, 'Failed to update product');
    }
  }

  @Mutation(() => Product)
  async deleteProduct(
    @Args('productDeleteArgs') productDeleteArgs: DeleteOneProductArgs,
    @Info() info,
  ) {
    try {
      this.logger.log(
        `Deleting product with ID: ${productDeleteArgs.where.id}`,
      );
      const product = new PrismaSelect(info).value;
      const deletedProduct = await this.productService.deleteProduct({
        ...productDeleteArgs,
        ...product,
      });
      return deletedProduct;
    } catch (error) {
      this.logger.error(
        `Failed to delete product with ID: ${productDeleteArgs.where.id}`,
        { error },
      );
      throw handleHttpError(error, 'Failed to delete product');
    }
  }
}
