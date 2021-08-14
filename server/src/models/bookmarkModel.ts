import fs from 'fs';
import path from 'path';

import QuestionModel from './questionModel';

import { Bookmark, BookmarkInput } from '../types';

export default class BookmarkModel {
  bookmarksFile;

  bookmarks: Bookmark[];

  jsonPath: string = '../db/bookmark.json'

  constructor() {
    this.bookmarksFile = fs.readFileSync(path.join(__dirname, this.jsonPath), 'utf-8');
    this.bookmarks = JSON.parse(this.bookmarksFile);
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
      fs.writeFileSync(path.join(__dirname, this.jsonPath), JSON.stringify(this.bookmarks), 'utf-8');

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

      fs.writeFileSync(path.join(__dirname, this.jsonPath), JSON.stringify(filteredBookmarks), 'utf-8');

      return removedBookmark;
    } catch (error) {
      throw Error(`${error} 파일 작성에 실패했습니다`);
    }
  }
}
