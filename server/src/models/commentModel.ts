import { v4 } from 'uuid';

import { readJSON, writeJSON } from '../utils';

import { Comment, NewComment, UpdateInfo } from '../types/comment';

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

  findOneByCommentId(commentId: string) {
    this.comments = readJSON(this.jsonPath);

    return this.comments.filter((comment) => comment.id === commentId)[0];
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

  updateOne({
    targetId, action, updateField, payload,
  }: UpdateInfo) {
    try {
      this.comments = readJSON(this.jsonPath);

      const targetComment = this.comments.find((comment) => comment.id === targetId);

      if (!targetComment) {
        throw Error('target을 찾을 수 없습니다');
      }

      const reducers = {
        REVISE: (comments: Comment[]) => comments.map((comment) => {
          if (comment.id === targetId) {
            return {
              ...comment,
              [updateField]: payload,
            };
          }
          return comment;
        }),
        PUSH: (comments: Comment[]) => comments.map((comment) => {
          if ((comment.id === targetId) && (updateField === 'like')) {
            return {
              ...comment,
              [updateField]: [...comment[updateField], payload],
            };
          }
          return comment;
        }),
        FILTER: (comments: Comment[]) => comments.map((comment) => {
          if ((comment.id === targetId) && (updateField === 'like')) {
            return {
              ...comment,
              [updateField]: comment[updateField].filter((value: any) => value !== payload),
            };
          }
          return comment;
        }),
      };

      this.comments = reducers[action](this.comments);

      writeJSON(this.jsonPath, this.comments);

      return this.comments.find((comment) => comment.id === targetId);
    } catch (error) {
      throw Error(`${error}파일 작성에 실패했습니다`);
    }
  }
}
