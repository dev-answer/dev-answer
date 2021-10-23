import QuestionRepository from '../../repositories/questionRepository.db';
import { QuestionVoteKind } from '../../types';

const questionRepoDB = new QuestionRepository();

export default {
  Query: {
    allQuestionsDB: async () => {
      const questions = await questionRepoDB.findAll();
      return questions;
    },
    questionsByCategoryIdDB: async (_: any, args: { categoryId: string }) => {
      const question = await questionRepoDB.findManyByCategoryId(args.categoryId);
      return question;
    },
    questionDetailDB: async (_: any, args: { questionId: number }) => {
      const question = await questionRepoDB.findOneByQuestionId(args.questionId);
      return question;
    },
  },
  Mutation: {
    voteDB: async (_: any, args: { questionId: number, userId: string, kind: QuestionVoteKind }) => {
      const question = await questionRepoDB.vote(args.questionId, args.userId, args.kind);
      return question;
    },
  },
};
