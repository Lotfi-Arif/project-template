// prisma/seed.ts
import { PrismaClient, UserRole, MediaType, OrderStatus } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPasswordAdmin = await hash('admin123', 10);
  const adminRefreshToken = await hash('admin-refresh-token', 10);
  const hashedPasswordUser = await hash('user123', 10);
  const userRefreshToken = await hash('user-refresh-token', 10);

  // Create an admin user with related Auth
  await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'User',
      role: UserRole.ADMIN,
      auth: {
        create: {
          email: 'admin@example.com',
          password: hashedPasswordAdmin,
          refreshToken: adminRefreshToken,
        },
      },
    },
  });

  // Create a regular user with related Auth and Address
  const regularUser = await prisma.user.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      role: UserRole.USER,
      auth: {
        create: {
          email: 'user@example.com',
          password: hashedPasswordUser,
          refreshToken: userRefreshToken,
        },
      },
      address: {
        createMany: {
          data: [
            {
              line1: '123 Main St',
              line2: 'Apt 4',
              city: 'Anytown',
              state: 'CA',
              zip: '12345',
              country: 'USA',
            },
          ],
        },
      },
    },
    include: {
      address: true, // Make sure to include the address field after creation
    },
  });

  // Ensure that the address has been created
  if (!regularUser.address || regularUser.address.length === 0) {
    throw new Error('No address found for the user.');
  }

  // Create a product with media
  const product = await prisma.product.create({
    data: {
      name: 'Sample Product',
      description: 'This is a sample product description.',
      price: 29.99,
      stock: 100,
      SKU: 'unique-sku-12345',
      media: {
        create: {
          type: MediaType.IMAGE,
          filename: 'sample-product.jpg',
          contentType: 'image/jpeg',
          url: 'http://example.com/sample-product.jpg',
        },
      },
      categories: {
        create: {
          name: 'Sample Category',
        },
      },
    },
  });

  // Create a cart for the regular user
  await prisma.cart.create({
    data: {
      user: {
        connect: { id: regularUser.id },
      },
      cartItems: {
        create: {
          product: {
            connect: { id: product.id },
          },
          quantity: 1,
          price: product.price,
        },
      },
    },
  });

  // Create an order for the regular user with related payment
  await prisma.order.create({
    data: {
      totalAmount: product.price,
      status: OrderStatus.PENDING,
      user: {
        connect: { id: regularUser.id },
      },
      // Since 'items' is a relation to CartItem, we need to use 'CartItem' fields
      payments: {
        create: {
          paymentMethod: 'Credit Card',
          amount: product.price,
          status: 'Completed',
        },
      },
      address: {
        connect: {
          id: regularUser.address[0].id, // Make sure the address is already created and linked to the user.
        },
      },
    },
  });

  // Create a review for the product
  await prisma.review.create({
    data: {
      content: 'Great product!',
      rating: 5,
      product: {
        connect: { id: product.id },
      },
      user: {
        connect: { id: regularUser.id },
      },
    },
  });

  console.log('Seed data created.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
