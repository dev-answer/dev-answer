import axios from 'axios';
import UserRepository from '../../repositories/userRepository';

import inMemoryTokenDB from '../../db/inMemoryTokenDB';

const userRepo = new UserRepository();

export default {
  Query: {
    login: async (_: any, { code }: { code: string }) => {
      const { GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_CLIENT_SECRET_KEY } = process.env;

      const GITHUB_ACCESS_TOKEN_API = `https://github.com/login/oauth/access_token?client_id=${GITHUB_OAUTH_CLIENT_ID}&client_secret=${GITHUB_OAUTH_CLIENT_SECRET_KEY}&code=${code}`;
      const GITHUB_USER_PROFILE_API = 'https://api.github.com/user';

      const { data } = await axios.post(GITHUB_ACCESS_TOKEN_API);
      const searchParams = new URLSearchParams(data);

      const githubAccessToken = searchParams.get('access_token') || '';

      if (!githubAccessToken) {
        return { token: null };
      }

      const { data: userInfomation } = await axios.get(GITHUB_USER_PROFILE_API, {
        headers: { Authorization: `token ${githubAccessToken}` },
      });

      const profile = {
        name: userInfomation.name,
        profileImageURL: userInfomation.avatar_url,
        githubPageURL: userInfomation.html_url,
      };

      const token = inMemoryTokenDB.generateToken();
      inMemoryTokenDB.setToken(token, profile);

      return { token };
    },
    allUsers: async () => {
      const users = await userRepo.findAll();
      return users;
    },
  },
};
