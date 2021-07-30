import BookmarkModel from '../models/bookmarkModel';

import Repository from './repository';

export default class BookmarkRepository extends Repository {
  constructor() {
    super({ Model: new BookmarkModel() });
  }

  async findManyByUserId(userId: number) {
    const result = await this.collection.findManyByUserId(userId);
    return result;
  }
}
