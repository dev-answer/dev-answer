import { readJSON, writeJSON } from '../utils';

import { User } from '../types/user';

export default class UserModel {
  users: User[];

  jsonPath: string = '../db/user.json'

  constructor() {
    this.users = readJSON(this.jsonPath);
  }

  private find(callback: (user: User) => boolean) {
    this.users = readJSON(this.jsonPath);

    const targetUser = this.users.find(callback);

    if (!targetUser) {
      return null;
    }

    const { accessToken, gitHubAccessToken, ...userInfo } = targetUser;

    return userInfo;
  }

  findMany() {
    this.users = readJSON(this.jsonPath);

    return this.users;
  }

  findOneByUserId(userId: string) {
    this.users = readJSON(this.jsonPath);

    const targetUser = this.find((user) => user.id === userId);

    return targetUser;
  }

  findOneByAccessToken(accessToken: string) {
    this.users = readJSON(this.jsonPath);

    const targetUser = this.find((user) => user.accessToken === accessToken);

    return targetUser;
  }

  createOne(user: Omit<User, 'id'>) {
    try {
      this.users = readJSON(this.jsonPath);

      const newUser = { id: Math.random().toString(), ...user };
      this.users = [...this.users, newUser];

      writeJSON(this.jsonPath, this.users);

      return this.users;
    } catch (error) {
      throw Error(`${error}파일 작성에 실패했습니다`);
    }
  }
}
