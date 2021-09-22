import QuestionCategoryRepository from '../../repositories/questionCategoryRepository.db';

const questionCategoryRepo = new QuestionCategoryRepository();

export default {
  Query: {
    allQuestionCategoriesDB: async () => {
      const questionCategories = await questionCategoryRepo.findAll();
      return questionCategories;
    },
  },
};
