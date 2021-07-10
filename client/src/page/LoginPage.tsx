import React, { useEffect } from 'react';

import APP_DOMAIN from '../constants/domain';
import GitHubOAuthAnchor from '../components/Login/GitHubOAuthAnchor';

const LoginPage: React.FC = () => {
  useEffect(() => {
    const handlePostMessage = (event: MessageEvent) => {
      if (event.origin !== APP_DOMAIN) {
        return;
      }

      const { accessToken } = event.data;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }

      // Todo: 추후 디자인 완료되면 여기서 추가적인 처리
    };

    window.addEventListener('message', handlePostMessage, false);
    return () => window.removeEventListener('message', handlePostMessage, false);
  }, []);

  return <GitHubOAuthAnchor />;
};

export default LoginPage;
