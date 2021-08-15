import UserModel from '../models/userModel';

import Repository from './repository';

import { User } from '../types/user';

export default class UserRepository extends Repository {
  constructor() {
    super({ Model: new UserModel() });
  }

  async create(user: Omit<User, 'id'>) {
    const result = await this.collection.create(user);
    return result;
  }

  async findOneByUserId(userId: string) {
    const user = await this.collection.findOneByUserId(userId);
    return user;
  }
}
