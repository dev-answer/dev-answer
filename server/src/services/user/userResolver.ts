import UserRepository from '../../repositories/userRepository';

const userRepo = new UserRepository();

export default {
  Query: {
    allUsers: async () => {
      const users = await userRepo.findAll();
      return users;
    },
  },
};
