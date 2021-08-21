import fs from 'fs';
import path from 'path';

import { User } from '../types';

export default class UserModel {
  usersFile;

  users: User[];

  constructor() {
    this.usersFile = fs.readFileSync(path.join(__dirname, '../db/user.json'), 'utf8');
    this.users = JSON.parse(this.usersFile);
  }

  private find(callback: (user: User) => boolean) {
    const targetUser = this.users.find(callback);

    if (!targetUser) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { accessToken, gitHubAccessToken, ...userInfo } = targetUser;

    return userInfo;
  }

  findMany() {
    return this.users;
  }

  findOneByUserId(userId: string) {
    const targetUser = this.find((user) => user.id === userId);

    return targetUser;
  }

  findOneByAccessToken(accessToken: string) {
    const targetUser = this.find((user) => user.accessToken === accessToken);

    return targetUser;
  }

  createOne(newUser: User) {
    try {
      this.users = [...this.users, newUser];

      fs.writeFileSync(path.join(__dirname, '../db/user.json'), JSON.stringify(this.users), 'utf-8');

      return newUser;
    } catch (error) {
      throw Error(`${error}파일 작성에 실패했습니다`);
    }
  }

  updateOne(user: User, paylaod: Partial<User>) {
    const updatedUser: User = { ...user, ...paylaod };
    this.users = this.users.map((dbUser) => (dbUser.id === user.id ? updatedUser : dbUser));

    try {
      fs.writeFileSync(path.join(__dirname, '../db/user.json'), JSON.stringify(this.users), 'utf-8');

      return updatedUser;
    } catch (error) {
      throw Error(`${error}파일 작성에 실패했습니다`);
    }
  }
}
