import { Schema, model } from 'mongoose';

interface QuestionCategory {
  id: Number;
  title: string;
}

const questionCategorySchema = new Schema<QuestionCategory>({
  id: Number,
  title: String,
});

const questionCategoryModel = model<QuestionCategory>('QuestionCategory', questionCategorySchema);


export default class QuestionCategoryModel {
  questionCategories;

  constructor() {
    this.questionCategories = questionCategoryModel;
  }

  async findMany(): Promise<QuestionCategory[] | null> {
    return this.questionCategories.find();
  }
}
