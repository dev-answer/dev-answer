import QuestionModel from './questionModel';

import { readJSON, writeJSON } from '../utils';

import { Bookmark, BookmarkInput } from '../types';

export default class BookmarkModel {
  bookmarks: Bookmark[];

  jsonPath: string = '../db/bookmark.json'

  constructor() {
    this.bookmarks = readJSON(this.jsonPath);
  }

  findManyByUserId(userId: number) {
    return this.bookmarks.filter((bookmark) => bookmark.userId === userId);
  }

  async createOne(bookmarkInput: BookmarkInput) {
    const { userId, questionId } = bookmarkInput;
    const newBookmark = {
      id: 100 + this.bookmarks.length + 1,
      userId,
      questionId,
      createdAt: new Date().toString(),
    };

    this.bookmarks = [...this.bookmarks, newBookmark];
    try {
      writeJSON(this.jsonPath, this.bookmarks);

      const questionModel = new QuestionModel();
      const question = await questionModel.findOneByQuestionId(questionId);

      const response = {
        id: newBookmark.id,
        question,
        createdAt: newBookmark.createdAt,
      };

      return response;
    } catch (error) {
      throw Error(`${error} 파일 작성에 실패했습니다`);
    }
  }

  removeOne(bookmarkId: number) {
    try {
      const removedBookmark = this.bookmarks.find((bookmark) => bookmark.id === bookmarkId);
      const filteredBookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== bookmarkId);

      writeJSON(this.jsonPath, filteredBookmarks);

      return removedBookmark;
    } catch (error) {
      throw Error(`${error} 파일 작성에 실패했습니다`);
    }
  }
}
