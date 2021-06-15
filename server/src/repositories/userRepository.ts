import { PrismaClient } from '@prisma/client';

import Repository from './repository';

const prisma = new PrismaClient();

export default class UserRepository extends Repository {
  constructor() {
    super({ Model: prisma.user });
  }
}
