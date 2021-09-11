import axios from 'axios';

import auth from './auth';
import UserRepository from '../../repositories/userRepository';
import { User } from '../../types';

const userRepo = new UserRepository();

export default {
  Mutation: {
    login: async (_: any, { code }: { code: string }) => {
      const { GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_CLIENT_SECRET_KEY } = process.env;

      const GITHUB_ACCESS_TOKEN_API = `https://github.com/login/oauth/access_token?client_id=${GITHUB_OAUTH_CLIENT_ID}&client_secret=${GITHUB_OAUTH_CLIENT_SECRET_KEY}&code=${code}`;
      const GITHUB_USER_PROFILE_API = 'https://api.github.com/user';

      const { data } = await axios.post(GITHUB_ACCESS_TOKEN_API);
      const searchParams = new URLSearchParams(data);

      const gitHubAccessToken = searchParams.get('access_token') || '';

      if (!gitHubAccessToken) {
        return { accessToken: null };
      }

      const { data: gitHubUser } = await axios.get(GITHUB_USER_PROFILE_API, {
        headers: { Authorization: `token ${gitHubAccessToken}` },
      });

      const user = await userRepo.findOneByUserId(gitHubUser.id);
      const accessToken = auth.generateAccessToken();
      const lastestGitHubProfile = {
        name: gitHubUser.name,
        gitHubURL: gitHubUser.html_url,
        profileImageURL: gitHubUser.avatar_url,
      };

      if (!user) {
        const newUser: User = {
          accessToken,
          gitHubAccessToken,
          id: gitHubUser.id.toString(),
          ...lastestGitHubProfile,
        };

        userRepo.createOne(newUser);

        return { accessToken };
      }

      if (!user.accessToken) {
        const updatedUser = await userRepo.updateOne(user, {
          accessToken,
          ...lastestGitHubProfile,
        });

        return { accessToken: updatedUser.accessToken };
      }

      const updatedUser = await userRepo.updateOne(user, {
        ...lastestGitHubProfile,
      });

      return { accessToken: updatedUser.accessToken };
    },
    logout: async (_: any, { accessToken }: { accessToken: string }) => {
      const user = await userRepo.findOneByAccessToken(accessToken);

      await userRepo.updateOne(user, { accessToken: null });

      return true;
    },
  },
};
