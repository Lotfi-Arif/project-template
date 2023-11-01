import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@app/prisma-generated/generated/nestgraphql/product/product.model';
import { ProductCreateInput } from '@app/prisma-generated/generated/nestgraphql/product/product-create.input';
import { ProductUpdateInput } from '@app/prisma-generated/generated/nestgraphql/product/product-update.input';

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new product.
   * @param data - Product data for creation.
   * @returns The created product.
   */
  async createProduct(data: ProductCreateInput): Promise<Product> {
    this.logger.log('Creating a new product');
    return this.prisma.product.create({ data });
  }

  /**
   * Retrieves a product by its ID.
   * @param id - ID of the product.
   * @returns The product or null if not found.
   * @throws NotFoundException if the product is not found.
   */
  async getProductById(id: string): Promise<Product | null> {
    this.logger.log(`Fetching product by id: ${id}`);
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      this.logger.warn(`Product with id ${id} not found`);
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  /**
   * Updates a product by its ID.
   * @param params - Parameters containing the ID and data for updating.
   * @returns The updated product.
   */
  async updateProduct(params: {
    id: string;
    data: ProductUpdateInput;
  }): Promise<Product> {
    const { id, data } = params;
    this.logger.log(`Updating product with id: ${id}`);
    return this.prisma.product.update({ where: { id }, data });
  }

  /**
   * Deletes a product by its ID.
   * @param id - ID of the product to be deleted.
   * @returns The deleted product.
   */
  async deleteProduct(id: string): Promise<Product> {
    this.logger.log(`Deleting product with id: ${id}`);
    return this.prisma.product.delete({ where: { id } });
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
    return this.prisma.product.findMany({ skip, take });
  }
}
