import React, { useEffect } from 'react';

import GitHubOAuthAnchor from '../components/Login/GitHubOAuthAnchor';

const LoginPage: React.FC = () => {
  useEffect(() => {
    const postMessageEvent = (event: MessageEvent) => {
      const { token } = event.data;

      if (token) {
        localStorage.setItem('token', token);
      }

      // Todo: 추후 디자인 완료되면 여기서 추가적인 처리
    };

    window.addEventListener('message', postMessageEvent, false);
    return () => window.removeEventListener('message', postMessageEvent, false);
  }, []);

  return <GitHubOAuthAnchor />;
};

export default LoginPage;
