import UserModel from '../models/userModel';

import Repository from './repository';

export default class UserRepository extends Repository {
  constructor() {
    super({ Model: new UserModel() });
  }
}
