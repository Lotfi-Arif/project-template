import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from '@app/prisma-generated/generated/nestgraphql/product/product.model';
import { Logger, NotFoundException } from '@nestjs/common';
import { handleHttpError } from '@app/common/utils';
import { UpdateOneProductArgs } from '@app/prisma-generated/generated/nestgraphql/product/update-one-product.args';

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
  async products(@Args('skip') skip?: number, @Args('take') take?: number) {
    try {
      this.logger.log(`Fetching products with skip: ${skip}, take: ${take}`);
      return await this.productService.getProducts({ skip, take });
    } catch (error) {
      this.logger.error('Failed to retrieve products', { error });
      throw handleHttpError(error, 'Failed to retrieve products');
    }
  }

  @Mutation(() => Product)
  async createProduct(@Args('data') data) {
    try {
      this.logger.log('Creating a new product');
      const newProduct = await this.productService.createProduct(data);
      return newProduct;
    } catch (error) {
      this.logger.error('Failed to create a new product', { error });
      throw handleHttpError(error, 'Failed to create a new product');
    }
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('id') id: string,
    @Args('data') data: UpdateOneProductArgs,
  ) {
    try {
      this.logger.log(`Updating product with ID: ${id}`);
      const updatedProduct = await this.productService.updateProduct({
        id,
        productUpdateArgs: data,
      });
      return updatedProduct;
    } catch (error) {
      this.logger.error(`Failed to update product with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to update product');
    }
  }

  @Mutation(() => Product)
  async deleteProduct(@Args('id') id: string) {
    try {
      this.logger.log(`Deleting product with ID: ${id}`);
      const deletedProduct = await this.productService.deleteProduct(id);
      return deletedProduct;
    } catch (error) {
      this.logger.error(`Failed to delete product with ID: ${id}`, { error });
      throw handleHttpError(error, 'Failed to delete product');
    }
  }
}
