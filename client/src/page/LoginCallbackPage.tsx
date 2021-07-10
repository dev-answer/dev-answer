import React, { useEffect } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { useLocation } from 'react-router-dom';

import APP_DOMAIN from '../constants/domain';
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
            accessToken
          }
        }
      `}
      variables={{ code }}
      render={({ props }) => {
        if (!props) {
          return '로그인을 하는 중입니다...';
        }

        const { accessToken } = props.login;

        return <LoginResult accessToken={accessToken} />;
      }}
    />
  );
};

const LoginResult: React.FC<{ accessToken: string | null }> = ({ accessToken }) => {
  useEffect(() => {
    window.opener?.postMessage({ accessToken }, APP_DOMAIN);
    window.close();
  }, []);

  return null;
};

export default LoginCallbackPage;
