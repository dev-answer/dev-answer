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
    return this.questions.findOne({ id: questionId });
  }
  async findMany(): Promise<Question[]> {
    return await this.questions.find();
  }
}
