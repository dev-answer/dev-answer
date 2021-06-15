/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'test@test.com',
    name: 'Answer',
    password: 'test',
  },
  {
    email: 'test1@test.com',
    name: 'Answer1',
    password: 'test1',
  },
  {
    email: 'test2@test.com',
    name: 'Answer2',
    password: 'test2',
  },
];

const categoryData: Prisma.CategoryCreateInput[] = [
  {
    title: 'React',
  },
  {
    title: 'JavaScript',
  },
  {
    title: 'HTML',
  },
  {
    title: 'CSS',
  },
];

const questionData: Prisma.QuestionCreateInput[] = [
  {
    title: '클로저',
    content: '클로저는 무엇일까요?',
    category: {
      connect: {
        title: 'JavaScript',
      },
    },
  },
  {
    title: 'ES6',
    content: 'ES6 문법을 아는대로 설명하세요',
    category: {
      connect: {
        title: 'JavaScript',
      },
    },
  },
];

const clearDB = async () => {
  const deleteUsers = prisma.user.deleteMany();
  const deleteCategories = prisma.category.deleteMany();
  const deleteQuestions = prisma.question.deleteMany();

  await prisma.$transaction([
    deleteQuestions,
    deleteCategories,
    deleteUsers,
  ]);
};

const seedDB = async () => {
  for (const data of userData) {
    await prisma.user.create({ data });
  }
  console.log('Created user table');

  for (const data of categoryData) {
    await prisma.category.create({ data });
  }
  console.log('Created category table');

  for (const data of questionData) {
    await prisma.question.create({ data });
  }
  console.log('Created question table');
};

const main = async () => {
  console.log('Start clearing ...');

  await clearDB();

  console.log('Success clearing ...');

  console.log('Start seeding ...');

  await seedDB();

  console.log('Seeding finished.');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
