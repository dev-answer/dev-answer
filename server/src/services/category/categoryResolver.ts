import CategoryRepository from '../../repositories/categoryRepository';

const categoryRepo = new CategoryRepository();

export default {
  Query: {
    allCategories: async () => {
      const categories = await categoryRepo.findAll();
      return categories;
    },
  },
};
