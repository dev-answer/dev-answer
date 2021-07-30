import fs from 'fs';
import path from 'path';

interface Question {
  id: number;
  title: string;
  content: string;
  category: string;
  level: number;
  frequency: boolean;
}

export default class QuestionModel {
  questionsFile;

  questions: [Question];

  constructor() {
    this.questionsFile = fs.readFileSync(path.join(__dirname, '../db/question.json'), 'utf-8');
    this.questions = JSON.parse(this.questionsFile);
  }

  findOneById(questionId: number): Question | undefined {
    return this.questions.find((question: Question) => question.id === questionId);
  }

  findMany(): [Question] {
    return this.questions;
  }
}
