import UserModel from '../models/userModel';

import Repository from './repository';

import { User } from '../types';

export default class UserRepository extends Repository {
  constructor() {
    super({ Model: new UserModel() });
  }

  async createOne(user: User) {
    const result = await this.collection.createOne(user);
    return result;
  }

  async updateOne(user: User, paylaod: Partial<User>) {
    const result = await this.collection.updateOne(user, paylaod);
    return result;
  }

  async findOneByUserId(userId: string) {
    const user = await this.collection.findOneByUserId(userId);
    return user;
  }

  async findOneByAccessToken(accessToken: string) {
    const user = await this.collection.findOneByAccessToken(accessToken);
    return user;
  }
}
