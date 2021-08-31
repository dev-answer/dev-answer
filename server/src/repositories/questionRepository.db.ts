import QuestionModel from '../models/questionModel.db';

import Repository from './repository';

export default class QuestionRepository extends Repository {
  constructor() {
    super({ Model: new QuestionModel() });
  }

  async findOneByQuestionId(quetionId: number) {
    const result = await this.collection.findOneByQuestionId(quetionId);
    return result;
  }
}
