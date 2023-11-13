import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@app/prisma-generated/generated/nestgraphql/product/product.model';
import { Prisma } from '@prisma/client';
import { handlePrismaError } from '@app/common/utils';

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new product.
   * @param data - Product data for creation.
   * @returns The created product.
   */
  async createProduct(data: Prisma.ProductCreateArgs): Promise<Product> {
    try {
      this.logger.log('Creating a new product');
      return await this.prisma.product.create(data);
    } catch (error) {
      this.logger.error('Failed to create product', { error, data });
      handlePrismaError(error, 'Failed to create product');
    }
  }

  /**
   * Retrieves a product by its ID.
   * @param id - ID of the product.
   * @returns The product or null if not found.
   * @throws NotFoundException if the product is not found.
   */
  async getProductById(id: string): Promise<Product | null> {
    this.logger.log(`Fetching product by id: ${id}`);
    try {
      const product = await this.prisma.product.findUnique({ where: { id } });
      if (!product) {
        this.logger.warn(`Product with id ${id} not found`);
        throw new NotFoundException('Product not found');
      }
      return product;
    } catch (error) {
      this.logger.error(`Failed to retrieve product with id: ${id}`, { error });
      handlePrismaError(error, `Failed to retrieve product with id: ${id}`);
    }
  }

  /**
   * Updates a product by its ID.
   * @param params - Parameters containing the ID and data for updating.
   * @returns The updated product.
   */
  async updateProduct(
    productUpdateArgs: Prisma.ProductUpdateArgs,
  ): Promise<Product> {
    const productId = productUpdateArgs.where.id;
    this.logger.log(`Updating product with id: ${productId}`);
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const existingProduct = await prisma.product.findUnique({
          where: { id: productId },
        });
        if (!existingProduct) {
          this.logger.warn(`Product with id ${productId} not found for update`);
          handlePrismaError(
            { code: 'P2025' },
            `Product with ID ${productId} not found`,
          );
        }
        return await prisma.product.update(productUpdateArgs);
      });
    } catch (error) {
      this.logger.error(`Failed to update product with id: ${productId}`, {
        error,
      });
      handlePrismaError(
        error,
        `Failed to update product with id: ${productId}`,
      );
    }
  }

  /**
   * Deletes a product by its ID.
   * @param id - ID of the product to be deleted.
   * @returns The deleted product.
   */
  async deleteProduct(id: string): Promise<Product> {
    this.logger.log(`Deleting product with id: ${id}`);
    try {
      return await this.prisma.$transaction(async (prisma) => {
        const existingProduct = await prisma.product.findUnique({
          where: { id },
        });
        if (!existingProduct) {
          this.logger.warn(`Product with id ${id} not found for deletion`);
          handlePrismaError(
            { code: 'P2025' },
            `Product with ID ${id} not found`,
          );
        }
        return await prisma.product.delete({ where: { id } });
      });
    } catch (error) {
      this.logger.error(`Failed to delete product with id: ${id}`, { error });
      handlePrismaError(error, `Failed to delete product with id: ${id}`);
    }
  }

  /**
   * Retrieves multiple products with optional pagination.
   * @param params - Optional parameters for pagination.
   * @returns List of products.
   */

  async getProducts(params: {
    skip?: number;
    take?: number;
  }): Promise<Product[]> {
    const { skip, take } = params;
    this.logger.log(
      `Fetching products with pagination - skip: ${skip}, take: ${take}`,
    );
    try {
      return await this.prisma.product.findMany({ skip, take });
    } catch (error) {
      this.logger.error('Failed to retrieve products', { error, params });
      handlePrismaError(error, 'Failed to retrieve products');
    }
  }
}
