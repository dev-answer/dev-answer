import fs from 'fs';
import path from 'path';

interface SubComment {
  id: number;
  createAt: string;
  userEmail: string;
  content: string;
  like: [string];
  hate: [string];
}

interface Comment {
  id: number;
  questionId: number;
  createAt: string;
  userEmail: string;
  content: string;
  like: [string];
  hate: [string];
  subComments: [SubComment]
}

export default class CommentModel {
  commentsFile;

  comments: [Comment];

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
}
