import React, { MouseEvent } from 'react';
import { APP_DOMAIN } from '../../constants/domain';

const GitHubOAuthAnchor: React.FC = () => {
  const CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID;
  const OAUTH_REDIRECT_URL = `${APP_DOMAIN}/oauth`;
  const OAUTH_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${OAUTH_REDIRECT_URL}`;

  const handleClickLogin = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    window.open(OAUTH_LOGIN_URL);
  };

  return (
    <a href={OAUTH_LOGIN_URL} onClick={handleClickLogin}>Login</a>
  );
};

export default GitHubOAuthAnchor;
