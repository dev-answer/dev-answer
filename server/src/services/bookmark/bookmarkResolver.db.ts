import BookmarkRepository from '../../repositories/bookmarkRepository.db';
import QuestionRepository from '../../repositories/questionRepository.db';

import { BookmarkDB, BookmarkInput } from '../../types';

const bookmarkRepo = new BookmarkRepository();
const questionRepo = new QuestionRepository();

export default {
  Query: {
    bookmarksDB: async (_: any, args: { userId: number }) => {
      const bookmarks = await bookmarkRepo.findManyByUserId(args.userId);
      // TODO : 나중에 PostgreSQL 사용시, IN절을 이용한 로직으로 로직 수정할 예정 해당 로직 해결할 예정
      const bookmarkWithQuestion = await Promise.all(bookmarks.map(async (bookmark: BookmarkDB) => {
        const question = await questionRepo.findOneByQuestionId(bookmark.questionId);
        return {
          ...(function () {
            return bookmark.toJSON();
          })(),
          question,
        };
      }));
      return bookmarkWithQuestion;
    },
  },
  Mutation: {
    addBookmarkDB: async (_: any, args: BookmarkInput) => {
      const result = await bookmarkRepo.createOne(args);
      return result;
    },
    removeBookmarkDB: async (_: any, args: { bookmarkId: number }) => {
      const { bookmarkId } = args;
      const result = await bookmarkRepo.removeOne(bookmarkId);
      return result;
    },
  },
};
