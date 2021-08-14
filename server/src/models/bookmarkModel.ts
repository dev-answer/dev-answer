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
      id: 100 + this.bookmarks.length,
      userId,
      questionId,
      createdAt: new Date().toString(),
    };

    this.bookmarks = [...this.bookmarks, newBookmark];

    fs.writeFileSync(path.join(__dirname, this.jsonPath), JSON.stringify(this.bookmarks), 'utf-8');

    const question = await new QuestionModel().findOneByQuestionId(questionId);

    const response = {
      id: newBookmark.id,
      question,
      createdAt: newBookmark.createdAt,
    };

    return response;
  }
}
