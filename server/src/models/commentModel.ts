import { v4 } from 'uuid';

import { readJSON, writeJSON } from '../utils';

import { Comment, NewComment } from '../types/comment';

export default class CommentModel {
  comments: Comment[];

  jsonPath: string = '../db/comment.json'

  constructor() {
    this.comments = readJSON(this.jsonPath);
  }

  findMany() {
    this.comments = readJSON(this.jsonPath);

    return this.comments;
  }

  findOne(questionId: number) {
    this.comments = readJSON(this.jsonPath);

    return this.comments.filter((comment) => comment.questionId === questionId);
  }

  createOne({ questionId, uid, content }: NewComment) {
    try {
      this.comments = readJSON(this.jsonPath);

      const id = `comment_${v4()}`;
      const comment: Comment = {
        id,
        questionId,
        createdAt: new Date().toJSON(),
        uid,
        content,
        like: [],
        dislike: [],
        subComments: [],
      };

      this.comments = [...this.comments, comment];

      writeJSON(this.jsonPath, this.comments);

      return comment;
    } catch (error) {
      throw Error(`${error}파일 작성에 실패했습니다`);
    }
  }
}
