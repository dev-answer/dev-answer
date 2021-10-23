import { Schema, model } from 'mongoose';

import { User } from '../types';

const userModelSchema = new Schema<User>({
  accessToken: String || null,
  id: String,
  name: String,
  gitHubURL: String,
  profileImageURL: String,
  gitHubAccessToken: String,
});

const userModelDB = model<User>('User', userModelSchema);

export default class UserModel {
  users;

  constructor() {
    this.users = userModelDB;
  }

  async findMany(): Promise<User[] | []> {
    const users = await this.users.find();
    return users;
  }

  async findOneByUserId(userId: string): Promise<User | null> {
    const user = await this.users.findOne({ id: userId });
    return user;
  }

  async findOneByAccessToken(accessToken: string): Promise<User | null> {
    const user = await this.users.findOne({ accessToken });
    return user;
  }

  async createOne(user: User) {
    await this.users.create(user);
    return user;
  }

  async updateOne(user: User, paylaod: Partial<User>) {
    const updatedUser: User = { ...user, ...paylaod };
    await this.users.updateOne({ id: user.id }, { ...updatedUser });
    return updatedUser;
  }
}
