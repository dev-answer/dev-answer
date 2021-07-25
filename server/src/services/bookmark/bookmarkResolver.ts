import BookmarkRepository from '../../repositories/bookmarkRepository';
import QuestionRepository from '../../repositories/questionRepository';

const bookmarkRepo = new BookmarkRepository();
const questionRepo = new QuestionRepository();

interface Bookmark {
  id: number;
  userId: number;
  questionId: number;
  createdAt: string;
}

export default {
  Query: {
    bookmarks: async (_:any, args: { userId: number }) => {
      const bookmarks = await bookmarkRepo.findAllById(args.userId);

      console.log('BookmarkResolver bookmarks : ', bookmarks);

      // TODO : 나중에 PostgreSQL 사용시, IN절을 이용한 로직으로 로직 수정할 예정 해당 로직 해결할 예정
      const bookmarkWithQuestion = bookmarks.map(async (bookmark: Bookmark) => {
        const question = await questionRepo.findOneById(bookmark.questionId);

        const temp = question[0];
        console.log('BookmarkResolver question : ', temp);

        return {
          ...bookmark,
          question,
        };
      });

      const results = await Promise.all(bookmarkWithQuestion);

      console.log('BookmarkResolver results : ', results);

      return results;
    },
  },
};
