import fs from 'fs';
import path from 'path';

export default class UserModel {
  usersFile;

  users;

  constructor() {
    this.usersFile = fs.readFileSync(path.join(__dirname, '../db/user.json'), 'utf8');
    this.users = JSON.parse(this.usersFile);
  }

  findMany() {
    return this.users;
  }
}
