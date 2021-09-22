import QuestionCategoryModel from '../models/questionCategoryModel.db';

import Repository from './repository';

export default class QuestionCategoryRepository extends Repository {
  constructor() {
    super({ Model: new QuestionCategoryModel() });
  }
}
