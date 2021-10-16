import fs from 'fs';
import path from 'path';
import { Question, QuestionCategory } from '../types';
import { readJSON } from '../utils';

export default class QuestionCategoryModel {
  questionCategoryFile;

  questionCategories: QuestionCategory[]

  constructor() {
    this.questionCategoryFile = fs.readFileSync(path.join(__dirname, '../db/questionCategory.json'), 'utf-8');
    this.questionCategories = JSON.parse(this.questionCategoryFile);
  }

  // eslint-disable-next-line class-methods-use-this
  private getCategoryCountMap() {
    const questions: Question[] = readJSON('../db/question.json');
    const categoryCountMap = questions.reduce((map, question) => {
      const targetCategoryCount = map.get(question.categoryId);

      if (targetCategoryCount) {
        map.set(question.categoryId, targetCategoryCount + 1);
        return map;
      }

      map.set(question.categoryId, 1);
      return map;
    }, new Map<string, number>());

    return categoryCountMap;
  }

  async findMany() {
    const categoryCountMap = this.getCategoryCountMap();

    return this.questionCategories.map(
      (category) => ({ ...category, count: categoryCountMap.get(category.id) ?? 0 }),
    );
  }
}
