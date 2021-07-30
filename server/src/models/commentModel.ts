import fs from 'fs';
import path from 'path';

export interface SubComment {
  id: number;
  createdAt: string;
  userEmail: string;
  content: string;
  like: [string];
  dislike: [string];
}

export interface Comment {
  id: number;
  questionId: number;
  createdAt: string;
  userEmail: string;
  content: string;
  like: [] | [string];
  dislike: [] | [string];
  subComments: [] | [SubComment]
}

export interface NewComment {
  questionId: number,
  userEmail: string,
  content: string,
}

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

  create(newComment: NewComment) {
    try {
      const id = this.comments.length;

      this.comments = [
        ...this.comments,
        {
          id,
          questionId: newComment.questionId,
          createdAt: new Date().toString(),
          userEmail: newComment.userEmail,
          content: newComment.content,
          like: [],
          dislike: [],
          subComments: [],
        },
      ];

      fs.writeFileSync('../db/comment.json', JSON.stringify(this.comments), 'utf-8');
      return id;
    } catch (error) {
      throw Error(`${error}파일 작성에 실패했습니다`);
    }
  }
}
