import fs from 'fs';
import path from 'path';

export default class QuestionCategoryModel {
  questionCategoryFile;

  questionCategories;

  constructor() {
    this.questionCategoryFile = fs.readFileSync(path.join(__dirname, '../db/questionCategory.json'), 'utf-8');
    this.questionCategories = JSON.parse(this.questionCategoryFile);
  }

  async findMany() {
    return this.questionCategories;
  }
}
