import {
  Comment, Question, QuestionAuthor, QuestionResponse, User,
} from '../types';
import { readJSON } from '../utils';

export default class QuestionModel {
  questions: Question[];

  jsonPath: string = '../db/question.json'

  constructor() {
    this.questions = readJSON(this.jsonPath);
  }

  // eslint-disable-next-line class-methods-use-this
  private merge(question: Question | null): QuestionResponse | null {
    if (!question) {
      return null;
    }

    const users: User[] = readJSON('../db/user.json');
    const targetUser = users.find((user: User) => user.id === question.authorId);

    if (!targetUser) {
      return null;
    }

    const author: QuestionAuthor = {
      id: targetUser.id,
      name: targetUser.name,
      gitHubURL: targetUser.gitHubURL,
      profileImageURL: targetUser.profileImageURL,
    };

    const comments: Comment[] = readJSON('../db/comment.json')
      .filter((comment: Comment) => comment.questionId === question.id);

    const questionResponse = { ...question, author, comments };

    return questionResponse;
  }

  findOneByQuestionId(questionId: number): QuestionResponse | null {
    const question = this.questions.find((q: Question) => q.id === questionId);

    if (!question) {
      return null;
    }

    const questionResponse = this.merge(question);
    return questionResponse;
  }

  findMany(): QuestionResponse[] {
    return this.questions.map((question) => this.merge(question)!).filter(Boolean);
  }
}
