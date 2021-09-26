import { Schema, model } from 'mongoose';
import { v4 } from 'uuid';

import { Comment, NewComment } from '../types';

const commentModelSchema = new Schema<Comment>({
  id: String,
  questionId: Number,
  createdAt: String,
  uid: String,
  content: String,
  like: [{ type: String }],
  dislike: [{ type: String }],
  subComments: [{
    id: String,
    createdAt: String,
    uid: String,
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

  async findMany(): Promise<Comment[] | []> {
    const comments = await this.comments.find();
    return comments;
  }

  async findOneByQuestionId(questionId: number): Promise<Comment[] | null> {
    const comment = await this.comments.find({ questionId });
    return comment;
  }

  async findOneByCommentId(commentId: string) {
    const comment = await this.comments.find({ commentId });
    return comment;
  }

  /*eslint class-methods-use-this: "error"*/
  async createOne({ questionId, uid, content }: NewComment) {
    try {
      const comment: Comment = {
        id: `comment_${v4()}`,
        questionId,
        createdAt: new Date().toJSON(),
        uid,
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

  // 이쪽 수정 부탁드립니다.
  // async updateOne({
  //   targetId, action, updateField, payload,
  // }: UpdateInfo) {
  //   try {
  //     let allComments = await this.comments.find();
  //     const targetComment = await this.findOneByCommentId(targetId);

  //     if (!targetComment) {
  //       throw Error('target을 찾을 수 없습니다');
  //     }

  //     const reducers = {
  //       REVISE: (comments: Comment[]) => comments.map((comment) => {
  //         if (comment.id === targetId) {
  //           return {
  //             ...comment,
  //             [updateField]: payload,
  //           };
  //         }
  //         return comment;
  //       }),
  //       PUSH: (comments: Comment[]) => comments.map((comment) => {
  //         if ((comment.id === targetId) && (updateField === 'like')) {
  //           return {
  //             ...comment,
  //             [updateField]: [...comment[updateField], payload],
  //           };
  //         }
  //         return comment;
  //       }),
  //       FILTER: (comments: Comment[]) => comments.map((comment) => {
  //         if ((comment.id === targetId) && (updateField === 'like')) {
  //           return {
  //             ...comment,
  //             [updateField]: comment[updateField].filter((value: any) => value !== payload),
  //           };
  //         }
  //         return comment;
  //       }),
  //     };

  //     allComments = reducers[action](allComments);

  //     await allComments.save();

  //     const comment = await this.findOneByCommentId(targetId);
  //     return comment;
  //   } catch (error) {
  //     throw Error(`${error}파일 작성에 실패했습니다`);
  //   }
  // }
}
