import QuestionRepository from '../../repositories/questionRepository';

const questionRepo = new QuestionRepository();

export default {
  Query: {
    allQuestions: async () => {
      const questions = await questionRepo.findAll();
      return questions;
    },
  },
};
