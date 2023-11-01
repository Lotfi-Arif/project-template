import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from '@app/prisma-generated/generated/nestgraphql/product/product.model';
import { Logger, NotFoundException } from '@nestjs/common';
import { ProductUpdateInput } from '@app/prisma-generated/generated/nestgraphql/product/product-update.input';

@Resolver(() => Product)
export class ProductResolver {
  private readonly logger = new Logger(ProductResolver.name);

  constructor(private readonly productService: ProductService) {}

  @Query(() => Product, { nullable: true })
  async product(@Args('id') id: string) {
    this.logger.log(`Fetching product with ID: ${id}`);
    const product = await this.productService.getProductById(id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  @Query(() => [Product])
  async products(@Args('skip') skip?: number, @Args('take') take?: number) {
    this.logger.log(`Fetching products with skip: ${skip}, take: ${take}`);
    const products = await this.productService.getProducts({ skip, take });
    return products;
  }

  @Mutation(() => Product)
  async createProduct(@Args('data') data) {
    this.logger.log('Creating a new product');
    const newProduct = await this.productService.createProduct(data);
    return newProduct;
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('id') id: string,
    @Args('data') data: ProductUpdateInput,
  ) {
    this.logger.log(`Updating product with ID: ${id}`);
    const updatedProduct = await this.productService.updateProduct({
      id,
      data,
    });
    return updatedProduct;
  }

  @Mutation(() => Product)
  async deleteProduct(@Args('id') id: string) {
    this.logger.log(`Deleting product with ID: ${id}`);
    const deletedProduct = await this.productService.deleteProduct(id);
    return deletedProduct;
  }
}
