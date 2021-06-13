import { PrismaClient } from '@prisma/client';

import Repository from './repository';

const prisma = new PrismaClient();

export default class QuestionRepository extends Repository {
  constructor() {
    super({ Model: prisma.question });
  }
}
