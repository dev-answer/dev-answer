import { Schema, model } from 'mongoose';

import { Comment, NewComment } from '../types';

const commentModelSchema = new Schema<Comment>({
  id: Number,
  questionId: Number,
  createdAt: String,
  userEmail: String,
  content: String,
  like: [{ type: String }],
  dislike: [{ type: String }],
  subComments: [{
    id: Number,
    createdAt: String,
    userEmail: String,
    content: String,
    like: [String],
    dislike: [String],
  }],
});

const CommentModelDB = model<Comment>('Comment', commentModelSchema);

export default class CommentModel {
  comments

  constructor() {
    this.comments = CommentModelDB;
  }
  // findMany 보단 findAll이 나을듯
  async findMany(): Promise<Comment[] | []> {
    const comments = await this.comments.find();
    return comments;
  }

  // TODO: findOne 보단 다수 return 하므로 find by questionId가 나을듯 혹은 bookmarkModel 쪽 처럼 findManyByUserId
  async findOne(questionId: number): Promise<Comment[] | null> {
    const comment = await this.comments.find({ questionId });
    return comment;
  }

  async create({ questionId, userEmail, content }: NewComment) {
    try {
      const id = this.comments.length + 1;// TODO: 추후 수정 필요
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

      const newComment = new CommentModelDB(comment);
      await newComment.save();
      return newComment;
    } catch (error) {
      throw Error(`${error}파일 작성에 실패했습니다`);
    }
  }
}
