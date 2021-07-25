import QuestionModel from '../models/questionModel';

import Repository from './repository';

export default class QuestionRepository extends Repository {
  constructor() {
    super({ Model: new QuestionModel() });
  }

  async findOneById(quetionId: number) {
    const result = await this.collection.findOneById(quetionId);
    return result;
  }
}
