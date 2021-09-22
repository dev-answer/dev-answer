import CommentModel from '../models/commentModel.db';

import Repository from './repository';

import { NewComment } from '../types';

export default class CommentRepository extends Repository {
  constructor() {
    super({ Model: new CommentModel() });
  }

  async findOne(questionId: number) {
    const result = await this.collection.findOne(questionId);
    return result;
  }

  async create(newComment: NewComment) {
    const result = await this.collection.create(newComment);
    return result;
  }
}
