import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';

import { APP_DOMAIN } from '../../constants/domain';

interface Props {
  className?: string
}

const GitHubOAuthAnchor: React.FC<Props> = ({ children, className }) => {
  const CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID;
  const OAUTH_REDIRECT_URL = `${APP_DOMAIN}/oauth`;
  const OAUTH_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${OAUTH_REDIRECT_URL}`;

  const handleClickLogin = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    window.open(OAUTH_LOGIN_URL);
  };

  return (
    <LoginAnchor
      className={className}
      href={OAUTH_LOGIN_URL}
      onClick={handleClickLogin}
    >
      {children}
    </LoginAnchor>
  );
};

const LoginAnchor = styled.a`
  text-decoration: none;
`;

export default GitHubOAuthAnchor;
