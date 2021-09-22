import { Schema, model } from 'mongoose';

import { User } from '../types';

const userModelSchema = new Schema<User>({
  accessToken: String || null,
  id: String,
  name: String,
  gitHubURL: String,
  profileImageURL: String,
  gitHubAccessToken: String,
})

const userModel = model<User>('User', userModelSchema);

export default class UserModel {
  users;

  constructor() {
    this.users = userModel;
  }

  async findMany(): Promise<User[] | []> {
    return await this.users.find();
  }

  async findOneByUserId(userId: string): Promise<User | null> {
    return await this.users.findOne({ id: userId });
  }

  async findOneByAccessToken(accessToken: string): Promise<User | null> {
    return await this.users.findOne({ accessToken });
  }

  async createOne(user: User) {
    const newUser = new userModel(user);
    await newUser.save();
    return newUser;
  }

  async updateOne(user: User, paylaod: Partial<User>) {
    const updatedUser: User = { ...user, ...paylaod };
    await this.users.updateOne({ id: user.id }, { ...updatedUser });
    return updatedUser;
  }
}
