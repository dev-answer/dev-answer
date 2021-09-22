import { Schema, model } from 'mongoose';
import QuestionModel from './questionModel';

import { Bookmark, BookmarkInput } from '../types';

const bookmarkModelSchema = new Schema<Bookmark>({
  id: Number,
  userId: Number,
  questionId: Number,
  createdAt: String,
});

const BookMarkModelDB = model<Bookmark>('Bookmark', bookmarkModelSchema);

export default class BookmarkModel {
  bookmarks

  constructor() {
    this.bookmarks = BookMarkModelDB;
  }

  async findManyByUserId(userId: number): Promise<Bookmark[] | []> {
    const users = await this.bookmarks.find({ userId });
    return users;
  }

  uid = (() => { // TODO : 일단 기능 구현 완성 후 uuid 도입 예정
    let i: number = 111;
    // eslint-disable-next-line no-plusplus
    return () => i++;
  })();

  // TODO: 추후 db에 맞게 수정
  async createOne(bookmarkInput: BookmarkInput) {
    const { userId, questionId } = bookmarkInput;
    const bookmark = {
      id: this.uid(),
      userId,
      questionId,
      createdAt: new Date().toString(),
    };

    try {
      const newBookmark = new BookMarkModelDB(bookmark);

      await newBookmark.save();

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

  async removeOne(bookmarkId: number): Promise<Bookmark | null> {
    try {
      const removedBookmark = await this.bookmarks.findOne({ id: bookmarkId });
      await this.bookmarks.deleteOne({ id: bookmarkId });
      return removedBookmark;
    } catch (error) {
      throw Error(`${error} 파일 작성에 실패했습니다`);
    }
  }
}
