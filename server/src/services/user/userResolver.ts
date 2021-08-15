import UserRepository from '../../repositories/userRepository';

const userRepo = new UserRepository();

export default {
  Query: {
    allUsers: async () => {
      const users = await userRepo.findAll();
      return users;
    },
    oneUser: async (_: any, { userId }: { userId: string }) => {
      const user = await userRepo.findOneByUserId(userId);
      return user;
    },
    myUser: async (_: any, { accessToken }: { accessToken: string }) => {
      const user = await userRepo.findOneByAccessToken(accessToken);
      return user;
    },
  },
};
