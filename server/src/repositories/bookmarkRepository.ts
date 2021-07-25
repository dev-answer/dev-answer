import BookmarkModel from '../models/bookmarkModel';

import Repository from './repository';

export default class BookmarkRepository extends Repository {
  constructor() {
    super({ Model: new BookmarkModel() });
  }

  async findAllById(userId: number) {
    const result = await this.collection.findAllByUserId(userId);
    return result;
  }
}
