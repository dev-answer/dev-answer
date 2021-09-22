import BookmarkModel from '../models/bookmarkModel.db';

import Repository from './repository';

import { BookmarkInput } from '../types';

export default class BookmarkRepository extends Repository {
  constructor() {
    super({ Model: new BookmarkModel() });
  }

  async findManyByUserId(userId: number) {
    const result = await this.collection.findManyByUserId(userId);
    return result;
  }

  async createOne(bookinput: BookmarkInput) {
    const result = await this.collection.createOne(bookinput);
    return result;
  }

  async removeOne(bookmarkId: number) {
    const result = await this.collection.removeOne(bookmarkId);
    return result;
  }
}
