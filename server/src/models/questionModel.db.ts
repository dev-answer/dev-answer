import { Schema, model } from 'mongoose';

interface Question {
  id: number;
  title: string;
  content: string;
  category: string;
  level: number;
  frequency: boolean;
}

const questionSchema = new Schema<Question>({
  id: Number,
  title: String,
  content: String,
  category: String,
  level: Number,
  frequency: Boolean,
});

const questionModel = model<Question>('Question', questionSchema);

export default class QuestionModel {
  questions;

  constructor() {
    this.questions = questionModel;
  }

  async findOneByQuestionId(questionId: number): Promise<Question | null> {
    const question = await this.questions.findOne({ id: questionId });
    return question;
  }

  async findMany(): Promise<Question[]> {
    const questions = await this.questions.find();
    return questions;
  }
}
