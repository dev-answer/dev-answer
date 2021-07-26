import CommentModel from '../models/commentModel';

import Repository from './repository';

export default class CommentRepository extends Repository {
  constructor() {
    super({ Model: new CommentModel() });
  }

  async findOne(questionId: number) {
    const result = await this.collection.findOne(questionId);
    return result;
  }
}
