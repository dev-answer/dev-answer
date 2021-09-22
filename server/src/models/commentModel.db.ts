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
})

const commentModel = model<Comment>('Comment', commentModelSchema);


export default class CommentModel {
  comments

  constructor() {
    this.comments = commentModel;
  }

  async findMany(): Promise<Comment[] | []> {
    return await this.comments.find();
  }

  async findOne(questionId: number): Promise<Comment | null> {
    return await this.comments.findOne({ questionId });
  }

  async create({ questionId, userEmail, content }: NewComment) {
    try {
      const id = this.comments.length + 1;//TODO: 추후 수정 필요
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

      const newComment = new commentModel(comment);
      await newComment.save();
      return newComment;
    } catch (error) {
      throw Error(`${error}파일 작성에 실패했습니다`);
    }
  }
}
