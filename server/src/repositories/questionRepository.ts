import QuestionModel from '../models/questionModel';

import Repository from './repository';

export default class QuestionRepository extends Repository {
  constructor() {
    super({ Model: new QuestionModel() });
  }

  async findOneByQuestionId(quetionId: number) {
    const result = await this.collection.findOneByQuestionId(quetionId);
    return result;
  }

  async findManyByCategoryId(categoryId: string) {
    const result = await this.collection.findManyByCategoryId(categoryId);
    return result;
  }
}
