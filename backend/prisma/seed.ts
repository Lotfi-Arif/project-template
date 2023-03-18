// prisma/seed.ts
import { PrismaClient, UserRole, MediaType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: 'admin123',
      firstName: 'Admin',
      lastName: 'User',
      role: UserRole.ADMIN,
    },
  });

  const teacher = await prisma.user.create({
    data: {
      email: 'teacher@example.com',
      password: 'teacher123',
      firstName: 'John',
      lastName: 'Doe',
      role: UserRole.TEACHER,
    },
  });

  const student = await prisma.user.create({
    data: {
      email: 'student@example.com',
      password: 'student123',
      firstName: 'Jane',
      lastName: 'Doe',
      role: UserRole.STUDENT,
    },
  });

  const course = await prisma.course.create({
    data: {
      name: 'Introduction to Programming',
      description: 'Learn the basics of programming.',
      teacher: { connect: { id: teacher.id } },
    },
  });

  const courseEnrollment = await prisma.courseEnrollment.create({
    data: {
      course: { connect: { id: course.id } },
      user: { connect: { id: student.id } },
    },
  });

  const chat = await prisma.chat.create({
    data: {
      user1: { connect: { id: teacher.id } },
      user2: { connect: { id: student.id } },
    },
  });

  const message = await prisma.message.create({
    data: {
      content: 'Hello, student!',
      sender: { connect: { id: teacher.id } },
      chat: { connect: { id: chat.id } },
    },
  });

  const media = await prisma.media.create({
    data: {
      type: MediaType.IMAGE,
      url: '/media/sample-image.jpg',
      course: { connect: { id: course.id } },
      Chat: { connect: { id: chat.id } },
    },
  });

  console.log('Seed data created:', {
    admin,
    teacher,
    student,
    course,
    courseEnrollment,
    chat,
    message,
    media,
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
