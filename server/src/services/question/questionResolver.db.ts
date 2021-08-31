import QuestionRepository from '../../repositories/questionRepository.db';

const questionRepoDB = new QuestionRepository();

export default {
  Query: {
    allQuestionsDB: async () => {
      const questions = await questionRepoDB.findAll();
      return questions;
    },
  },
};
