import fs from 'fs';
import path from 'path';

import { Comment, NewComment } from '../types/comment';

export default class CommentModel {
  commentsFile;

  comments: Comment[];

  constructor() {
    this.commentsFile = fs.readFileSync(path.join(__dirname, '../db/comment.json'), 'utf8');
    this.comments = JSON.parse(this.commentsFile);
  }

  findMany() {
    return this.comments;
  }

  findOne(questionId: number) {
    return this.comments.filter((comment) => comment.questionId === questionId);
  }

  create({ questionId, userEmail, content }: NewComment) {
    try {
      const id = this.comments.length + 1;
      const comment: Comment = {
        id,
        questionId,
        createdAt: new Date().toJSON(),
        userEmail,
        content,
        like: [],
        dislike: [],
        subComments: [],
      };

      this.comments = [...this.comments, comment];

      fs.writeFileSync(path.join(__dirname, '../db/comment.json'), JSON.stringify(this.comments), 'utf-8');

      return comment;
    } catch (error) {
      throw Error(`${error}파일 작성에 실패했습니다`);
    }
  }
}
