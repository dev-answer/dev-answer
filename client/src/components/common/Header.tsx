import React from 'react';
import styled from '@emotion/styled';

import { graphql, useLazyLoadQuery, useMutation } from 'react-relay';
import { useGetAuthStore } from '../../contexts/AuthStore';
import GitHubOAuthAnchor from '../../components/Login/GitHubOAuthAnchor';
import Logo from '../Icon/Logo';

import { HeaderQuery } from '../../__generated__/HeaderQuery.graphql';
import { HeaderLogoutMutation } from '../../__generated__/HeaderLogoutMutation.graphql';

const IsLoggedInQuery = graphql`
  query HeaderQuery($accessToken: String!) {
    myInfo(accessToken: $accessToken) {
      id
    }
  }
`;

const LogoutMutation = graphql`
  mutation HeaderLogoutMutation($accessToken: String!) {
    logout(accessToken: $accessToken)
  }
`;

interface Props {
  logoColor?: string
  backgroundColor?: string
}

const Header: React.FC<Props> = ({ logoColor, backgroundColor }) => {
  const { accessToken, handleResetToken } = useGetAuthStore();
  const { myInfo } = useLazyLoadQuery<HeaderQuery>(IsLoggedInQuery, { accessToken });
  const [commitLogoutMutation] = useMutation<HeaderLogoutMutation>(LogoutMutation);

  const isLoggedIn = Boolean(myInfo?.id);

  const handleClickLogout = () => {
    handleResetToken();
    commitLogoutMutation({
      variables: { accessToken },
    });
  };

  return (
    <HeaderArea backgroundColor={backgroundColor}>
      <LogoArea>
        <Logo color={logoColor} />
      </LogoArea>
      <LoginButtonArea>
        {isLoggedIn
          ? <LogoutButton onClick={handleClickLogout}>로그아웃</LogoutButton>
          : <LoginButton>로그인</LoginButton>}
      </LoginButtonArea>
    </HeaderArea>
  );
};

const HeaderArea = styled.header<{ backgroundColor?: string }>`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 48px 0 32px;
  ${({ backgroundColor }) => (backgroundColor ? `background:${backgroundColor}` : '')};
`;

const LogoArea = styled.div`
  margin-top: 8px;
`;

const LoginButtonArea = styled.div`
  margin-top: 32px;
`;

const LoginButton = styled(GitHubOAuthAnchor)`
  display: block;
  font-size: 14px;
  color: #230640;
  background: #FFE666;
  border-radius: 10px;
  padding: 16px;
`;

const LogoutButton = styled.button`
  font-size: 14px;
  color: #230640;
  background: #FFE666;
  border-radius: 10px;
  padding: 16px;
`;

export default Header;
