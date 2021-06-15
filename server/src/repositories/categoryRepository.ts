import { PrismaClient } from '@prisma/client';

import Repository from './repository';

const prisma = new PrismaClient();

export default class CategoryRepository extends Repository {
  constructor() {
    super({ Model: prisma.category });
  }
}
