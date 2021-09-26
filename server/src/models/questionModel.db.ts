import { Schema, model } from 'mongoose';

import {
  Question, QuestionVoteKind,
} from '../types';

const questionSchema = new Schema<Question>({
  id: Number,
  content: String,
  categoryId: String,
  vote: [{
    userId: String,
    kind: String,
  }],
  authorId: String,
  infomations: [String],
});

const questionModel = model<Question>('Question', questionSchema);

export default class QuestionModel {
  questions;

  constructor() {
    this.questions = questionModel;
  }

  // 사용 용도가??
  // private merge(question: Question | null): QuestionResponse | null {
  //   if (!question) {
  //     return null;
  //   }

  //   const users: User[] = readJSON('../db/user.json');
  //   const targetUser = users.find((user: User) => user.id === question.authorId);

  //   if (!targetUser) {
  //     return null;
  //   }

  //   const author: QuestionAuthor = {
  //     id: targetUser.id,
  //     name: targetUser.name,
  //     gitHubURL: targetUser.gitHubURL,
  //     profileImageURL: targetUser.profileImageURL,
  //   };

  //   const comments: Comment[] = readJSON('../db/comment.json')
  //     .filter((comment: Comment) => comment.questionId === question.id);

  //   const cateogries: QuestionCategory[] = readJSON('../db/questionCategory.json');
  //   const category = cateogries.find((c) => c.id === question.categoryId);

  //   if (!category) {
  //     return null;
  //   }

  //   const questionResponse = {
  //     ...question, author, comments, category,
  //   };

  //   return questionResponse;
  // }

  async findOneByQuestionId(questionId: number): Promise<Question | null> {
    const question = await this.questions.findOne({ id: questionId });
    return question;
  }

  async findManyByCategoryId(categoryId: string): Promise<Question[]> {
    const questions = await this.questions.find({ categoryId });
    return questions;
  }

  async findMany(): Promise<Question[]> {
    const questions = await this.questions.find();
    return questions;
  }

  async vote(questionId: number, userId: string, kind: QuestionVoteKind) {
    const question = await this.questions.findOne({ id: questionId });

    if (!question) {
      return null;
    }

    const hasAlreadyBeenVoted = question.vote.find((v) => v.userId === userId);
    const vote = hasAlreadyBeenVoted
      ? question.vote.map((v) => (v.userId === userId ? { userId, kind } : v))
      : [...question.vote, { userId, kind }];

    const updatedQuestion = {
      ...(function () {
        return question.toJSON();
      }()),
      vote,
    };
    await this.questions.updateOne({ id: questionId }, { ...updatedQuestion });

    const normalizedVoteCount = updatedQuestion.vote.reduce(
      (acc, cur) => ({ ...acc, [cur.kind]: acc[cur.kind] + 1 }),
      { easy: 0, normal: 0, hard: 0 },
    );

    return normalizedVoteCount;
  }
}
