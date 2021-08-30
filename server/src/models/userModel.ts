import fs from 'fs';
import path from 'path';

import { User } from '../types';
import { writeJSON } from '../utils';

export default class UserModel {
  usersFile;

  users: User[];

  constructor() {
    this.usersFile = fs.readFileSync(path.join(__dirname, '../db/user.json'), 'utf8');
    this.users = JSON.parse(this.usersFile);
  }

  findMany() {
    return this.users;
  }

  findOneByUserId(userId: string) {
    const targetUser = this.users.find((user) => user.id === userId);

    return targetUser;
  }

  findOneByAccessToken(accessToken: string) {
    const targetUser = this.users.find((user) => user.accessToken === accessToken);

    return targetUser;
  }

  createOne(newUser: User) {
    this.users = [...this.users, newUser];

    writeJSON(path.join('../db/user.json'), this.users);

    return newUser;
  }

  updateOne(user: User, paylaod: Partial<User>) {
    const updatedUser: User = { ...user, ...paylaod };
    this.users = this.users.map((dbUser) => (dbUser.id === user.id ? updatedUser : dbUser));

    writeJSON(path.join('../db/user.json'), this.users);

    return updatedUser;
  }
}
