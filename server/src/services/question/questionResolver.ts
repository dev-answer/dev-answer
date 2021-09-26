import QuestionRepository from '../../repositories/questionRepository';

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
};
