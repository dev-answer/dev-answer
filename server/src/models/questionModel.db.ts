import { Schema, model, Document } from 'mongoose';

interface Question extends Document {
  id: number;
  title: string;
  content: string;
  category: string;
  level: number;
  frequency: boolean;
}

const questionSchema = new Schema({
  id: { type: Number, required: false },
  title: { type: String, required: false },
  content: { type: String, required: false },
  category: { type: String, required: false },
  level: { type: Number, required: false },
  frequency: { type: Boolean, required: false },
});

const questionModel = model<Question>('Question', questionSchema);

export default class QuestionModel {
  questions;

  constructor() {
    this.questions = questionModel;
  }

  async findMany(): Promise<Question[]> {
    const result = await this.questions.find();
    return result;
  }
}
