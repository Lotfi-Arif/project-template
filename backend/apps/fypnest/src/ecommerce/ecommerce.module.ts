// e-commerce.module.ts
import { Module } from '@nestjs/common';
import { ECommerceService } from './ecommerce.service';
import { UserModule } from '../user/user.module';
import { ProductModule } from '../product/product.module';
import { OrderModule } from '../order/order.module';
import { ReviewModule } from '../review/review.module';

@Module({
  imports: [UserModule, ProductModule, OrderModule, ReviewModule],
  providers: [ECommerceService],
  exports: [ECommerceService], // Export if you want to use it in other modules
})
export class ECommerceModule {}
