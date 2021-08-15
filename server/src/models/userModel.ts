import fs from 'fs';
import path from 'path';

import { User } from '../types/user';

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

    if (!targetUser) {
      return null;
    }

    const { accessToken, gitHubAccessToken, ...userInfo } = targetUser;

    return userInfo;
  }

  create(user: Omit<User, 'id'>) {
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
