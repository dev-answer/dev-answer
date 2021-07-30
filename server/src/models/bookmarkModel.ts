import fs from 'fs';
import path from 'path';

interface Bookmark {
  id: number;
  userId: number;
  questionId: number;
  createdAt: Date;
}

export default class BookmarkModel {
  bookmarksFile;

  bookmarks: [Bookmark];

  constructor() {
    this.bookmarksFile = fs.readFileSync(path.join(__dirname, '../db/bookmark.json'), 'utf-8');
    this.bookmarks = JSON.parse(this.bookmarksFile);
  }

  findAllByUserId(userId: number) {
    return this.bookmarks.filter((bookmark) => bookmark.userId === userId);
  }
}
