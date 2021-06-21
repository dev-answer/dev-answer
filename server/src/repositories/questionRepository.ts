import QuestionModel from '../models/questionModel';

import Repository from './repository';

export default class QuestionRepository extends Repository {
  constructor() {
    super({ Model: new QuestionModel() });
  }
}
