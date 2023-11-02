// prisma/seed.ts
import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create an admin user
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: 'admin123',
      firstName: 'Admin',
      lastName: 'User',
      role: UserRole.ADMIN,
    },
  });

  // Create an Auth for the admin user
  const adminAuth = await prisma.auth.create({
    data: {
      username: 'admin',
      password: 'admin123',
      user: { connect: { id: admin.id } },
    },
  });

  // Create a regular user
  const regularUser = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: 'user123',
      firstName: 'John',
      lastName: 'Doe',
      role: UserRole.USER,
    },
  });

  // Create an Auth for the regular user
  const userAuth = await prisma.auth.create({
    data: {
      username: 'john',
      password: 'user123',
      user: { connect: { id: regularUser.id } },
    },
  });

  const product = await prisma.product.create({
    data: {
      stock: 1,
      name: 'sdasd',
      description: 'asdasd',
      price: 123,
      SKU: 'some-unique-sku',
      media: {
        connectOrCreate: {
          create: {
            contentType: '',
            filename: '',
            type: 'IMAGE',
            url: '',
          },
          where: {
            id: '',
          },
        },
      },
    },
  });

  // Create an order for the regular user
  const order = await prisma.order.create({
    data: {
      totalAmount: 2,
      user: { connect: { id: regularUser.id } },
    },
  });

  // Create a review for the regular user
  const review = await prisma.review.create({
    data: {
      content: 'somethign',
      rating: 5,
      product: {
        connect: {
          id: product.id,
        },
      },
      user: { connect: { id: regularUser.id } },
    },
  });

  console.log('Seed data created:', {
    admin,
    adminAuth,
    regularUser,
    userAuth,
    order,
    review,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
