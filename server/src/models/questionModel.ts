import fs from 'fs';
import path from 'path';

export default class QuestionModel {
  questionsFile;

  questions;

  constructor() {
    this.questionsFile = fs.readFileSync(path.join(__dirname, '../db/question.json'), 'utf-8');
    this.questions = JSON.parse(this.questionsFile);
  }

  findMany() {
    return this.questions;
  }
}
