import {
  Comment, Question, QuestionAuthor, QuestionCategory, QuestionResponse, QuestionVoteKind, User,
} from '../types';
import { readJSON, writeJSON } from '../utils';

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

    const cateogries: QuestionCategory[] = readJSON('../db/questionCategory.json');
    const category = cateogries.find((c) => c.id === question.categoryId);

    if (!category) {
      return null;
    }

    const questionResponse = {
      ...question, author, comments, category,
    };

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

  findManyByCategoryId(categoryId: string): QuestionResponse[] {
    return this.findMany().filter((question) => question.categoryId === categoryId);
  }

  findMany(): QuestionResponse[] {
    return this.questions.map((question) => this.merge(question)!).filter(Boolean);
  }

  vote(questionId: number, userId: string, kind: QuestionVoteKind) {
    this.questions = readJSON(this.jsonPath);

    const question = this.questions.find((q) => q.id === questionId);

    if (!question) {
      return null;
    }

    const hasAlreadyBeenVoted = question.votes.find((v) => v.userId === userId);
    const votes = hasAlreadyBeenVoted
      ? question.votes.map((v) => (v.userId === userId ? { userId, kind } : v))
      : [...question.votes, { userId, kind }];

    const updatedQuestion = { ...question, votes };

    this.questions = this.questions.map((q) => (q.id === questionId ? updatedQuestion : q));
    writeJSON(this.jsonPath, this.questions);

    const normalizedVoteCount = updatedQuestion.votes.reduce(
      (acc, cur) => ({ ...acc, [cur.kind]: acc[cur.kind] + 1 }),
      { easy: 0, normal: 0, hard: 0 },
    );

    return normalizedVoteCount;
  }
}
