import path from 'path';

import { User } from '../types';
import { readJSON, writeJSON } from '../utils';

export default class UserModel {
  users: User[];

  jsonPath: string = '../db/user.json'

  constructor() {
    this.users = readJSON(this.jsonPath);
  }

  findMany() {
    this.users = readJSON(this.jsonPath);

    return this.users;
  }

  findOneByUserId(userId: string) {
    this.users = readJSON(this.jsonPath);

    const targetUser = this.users.find((user) => user.id === userId);

    return targetUser;
  }

  findOneByAccessToken(accessToken: string) {
    this.users = readJSON(this.jsonPath);

    const targetUser = this.users.find((user) => user.accessToken === accessToken);

    return targetUser;
  }

  createOne(newUser: User) {
    this.users = readJSON(this.jsonPath);

    this.users = [...this.users, newUser];

    writeJSON(path.join('../db/user.json'), this.users);

    return newUser;
  }

  updateOne(user: User, paylaod: Partial<User>) {
    this.users = readJSON(this.jsonPath);

    const updatedUser: User = { ...user, ...paylaod };
    this.users = this.users.map((dbUser) => (dbUser.id === user.id ? updatedUser : dbUser));

    writeJSON(path.join('../db/user.json'), this.users);

    return updatedUser;
  }
}
