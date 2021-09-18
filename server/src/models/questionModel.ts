import {
  Comment, Question, QuestionAuthor, QuestionResponse, User,
} from '../types';
import { readJSON } from '../utils';

export default class QuestionModel {
  questions: [Question];

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
  }

  findMany(): [Question] {
    return this.questions;
  }
}
