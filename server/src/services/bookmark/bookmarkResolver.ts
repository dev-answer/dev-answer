import BookmarkRepository from '../../repositories/bookmarkRepository';
import QuestionRepository from '../../repositories/questionRepository';

import { Bookmark, BookmarkInput } from '../../types';

const bookmarkRepo = new BookmarkRepository();
const questionRepo = new QuestionRepository();

export default {
  Query: {
    bookmarks: async (_:any, args: { userId: number }) => {
      const bookmarks = await bookmarkRepo.findManyByUserId(args.userId);

      // TODO : 나중에 PostgreSQL 사용시, IN절을 이용한 로직으로 로직 수정할 예정 해당 로직 해결할 예정
      const bookmarkWithQuestion = bookmarks.map(async (bookmark: Bookmark) => {
        const question = await questionRepo.findOneByQuestionId(bookmark.questionId);

        return {
          ...bookmark,
          question,
        };
      });

      const results = await Promise.all(bookmarkWithQuestion);

      return results;
    },
  },
  Mutation: {
    addBookmark: async (_: any, args: BookmarkInput) => {
      const result = await bookmarkRepo.createOne(args);
      return result;
    },
  },
};
