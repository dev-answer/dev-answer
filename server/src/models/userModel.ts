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

  createOne(user: Omit<User, 'id'>) {
    try {
      const newUser = { id: Math.random().toString(), ...user };
      this.users = [...this.users, newUser];

      fs.writeFileSync(path.join(__dirname, '../db/user.json'), JSON.stringify(this.users), 'utf-8');

      return this.users;
    } catch (error) {
      throw Error(`${error}파일 작성에 실패했습니다`);
    }
  }
}
