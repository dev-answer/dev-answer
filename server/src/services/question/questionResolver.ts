import QuestionRepository from '../../repositories/questionRepository';
import { QuestionVoteKind } from '../../types';

const questionRepo = new QuestionRepository();

export default {
  Query: {
    allQuestions: async () => {
      const questions = await questionRepo.findAll();
      return questions;
    },
    questionsByCategoryId: async (_:any, args: { categoryId: string }) => {
      const question = await questionRepo.findManyByCategoryId(args.categoryId);
      return question;
    },
    questionDetail: async (_:any, args: { questionId: number }) => {
      const question = await questionRepo.findOneByQuestionId(args.questionId);
      return question;
    },
  },
  Mutation: {
    vote: async (_:any, args: { questionId: number, userId: string, kind: QuestionVoteKind }) => {
      const question = await questionRepo.vote(args.questionId, args.userId, args.kind);
      return question;
    },
  },
};
