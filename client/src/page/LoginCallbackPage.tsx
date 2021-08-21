import React, { useEffect } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useLocation } from 'react-router-dom';

import withSuspense from '../hocs/withSuspense';
import { LoginCallbackPageQuery } from '../__generated__/LoginCallbackPageQuery.graphql';

import { APP_DOMAIN } from '../constants/domain';

const LoginCallbackPage: React.FC = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const code = searchParams.get('code') || '';

  const query = useLazyLoadQuery<LoginCallbackPageQuery>(graphql`
    mutation LoginCallbackPageQuery($code: String!) {
      login(code: $code) {
        accessToken
      }
    }
  `, { code });

  useEffect(() => {
    const { accessToken } = query.login;

    window.opener?.postMessage({ accessToken }, APP_DOMAIN);
    window.close();
  }, []);

  return null;
};

export default withSuspense(LoginCallbackPage, () => <div>로딩중...</div>);
