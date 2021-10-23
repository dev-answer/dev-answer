import CommentModel from '../models/commentModel.db';

import Repository from './repository';

import { NewComment, UpdateInfo } from '../types';

export default class CommentRepository extends Repository {
  constructor() {
    super({ Model: new CommentModel() });
  }

  async findOneByQuestionId(questionId: number) {
    const result = await this.collection.findOneByQuestionId(questionId);
    return result;
  }

  async findOneByCommentId(commentId: string) {
    const result = await this.collection.findOneByCommentId(commentId);
    return result;
  }

  async createOne(newComment: NewComment) {
    const result = await this.collection.createOne(newComment);
    return result;
  }

  async updateOne(updateInfo: UpdateInfo) {
    const result = await this.collection.updateOne(updateInfo);
    return result;
  }
}
