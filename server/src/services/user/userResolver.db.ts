import UserRepository from '../../repositories/userRepository';

const userRepo = new UserRepository();

export default {
  Query: {
    allUsersDB: async () => {
      const users = await userRepo.findAll();
      return users;
    },
    userInfoDB: async (_: any, { userId }: { userId: string }) => {
      const user = await userRepo.findOneByUserId(userId);
      return user;
    },
    myInfoDB: async (_: any, { accessToken }: { accessToken: string }) => {
      const user = await userRepo.findOneByAccessToken(accessToken);
      return user;
    },
  },
};
