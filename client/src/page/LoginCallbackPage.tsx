import React, { useEffect } from 'react';
import { graphql, useMutation } from 'react-relay';
import { useLocation } from 'react-router-dom';

import { LoginCallbackPageMutation } from '../__generated__/LoginCallbackPageMutation.graphql';
import withSuspense from '../hocs/withSuspense';

import { APP_DOMAIN } from '../constants/domain';

const LoginCallbackMutation = graphql`
  mutation LoginCallbackPageMutation($code: String!) {
    login(code: $code) {
      accessToken
    }
  }
`;

const LoginCallbackPage: React.FC = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const code = searchParams.get('code') || '';

  const [commitLoginMutation] = useMutation<LoginCallbackPageMutation>(LoginCallbackMutation);

  useEffect(() => {
    commitLoginMutation({
      variables: { code },
      updater: (_, data) => {
        const { accessToken } = data.login;

        window.opener?.postMessage({ accessToken }, APP_DOMAIN);
        window.close();
      },
    });
  }, []);

  return null;
};

export default withSuspense(LoginCallbackPage, () => <div>로딩중...</div>);
