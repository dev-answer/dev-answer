import { readJSON } from '../utils';

interface Question {
  id: number;
  title: string;
  content: string;
  category: string;
  level: number;
  frequency: boolean;
}

export default class QuestionModel {
  questions: [Question];

  jsonPath: string = '../db/question.json'

  constructor() {
    this.questions = readJSON(this.jsonPath);
  }

  findOneByQuestionId(questionId: number): Question | undefined {
    return this.questions.find((question: Question) => question.id === questionId);
  }

  findMany(): [Question] {
    return this.questions;
  }
}
