import React, { useEffect } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { useLocation } from 'react-router-dom';

import APP_DOMAIN from 'constants/domain';
import Environment from '../graphql';
import { LoginCallbackPageQuery } from '../__generated__/LoginCallbackPageQuery.graphql';

const LoginCallbackPage: React.FC = () => {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const code = searchParams.get('code') || '';

  return (
    <QueryRenderer<LoginCallbackPageQuery>
      environment={Environment}
      query={graphql`
        query LoginCallbackPageQuery($code: String!) {
          login(code: $code) {
            token
          }
        }
      `}
      variables={{ code }}
      render={({ props }) => {
        if (!props) {
          return '로그인을 하는 중입니다...';
        }

        const { token } = props.login;

        return <LoginResult token={token} />;
      }}
    />
  );
};

const LoginResult: React.FC<{ token: string | null }> = ({ token }) => {
  useEffect(() => {
    window.opener?.postMessage({ token }, APP_DOMAIN);
    window.close();
  }, []);

  return null;
};

export default LoginCallbackPage;
