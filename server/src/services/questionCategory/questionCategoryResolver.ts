import QuestionCategoryRepository from '../../repositories/questionCategoryRepository';

const questionCategoryRepo = new QuestionCategoryRepository();

export default {
  Query: {
    allQuestionCategories: async () => {
      const questionCategories = await questionCategoryRepo.findAll();
      return questionCategories;
    },
  },
};
