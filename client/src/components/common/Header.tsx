import React from 'react';
import styled from '@emotion/styled';

import { graphql, useLazyLoadQuery, useMutation } from 'react-relay';
import { useGetAuthStore } from '../../contexts/AuthStore';
import withPromiseComponent from '../../hocs/withPromiseComponent';
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

const Header: React.FC = () => {
  const { accessToken, handleResetToken } = useGetAuthStore();
  const { myInfo } = useLazyLoadQuery<HeaderQuery>(IsLoggedInQuery, { accessToken });
  const [commitLogoutMutation] = useMutation<HeaderLogoutMutation>(LogoutMutation);

  const isLoggedIn = Boolean(myInfo?.id);

  const buttons = [
    {
      icon: <TempCircle />,
      title: '알림창',
      onClick: () => {},
    },
    {
      icon: <TempCircle />,
      title: '질문 등록',
      onClick: () => {},
    },
    {
      icon: <TempCircle />,
      title: '내 정보',
      onClick: () => {},
    },
  ];

  const handleClickLogout = () => {
    handleResetToken();
    commitLogoutMutation({
      variables: { accessToken },
    });
  };

  return (
    <HeaderArea>
      <LeftSideArea>
        <Logo />
        <LogoTitle>
          Dev
          <br />
          Answer
        </LogoTitle>
      </LeftSideArea>
      <RightSideArea>
        {buttons.map(({ icon, title, onClick }) => (
          <Button key={title} onClick={onClick}>
            {icon}
            {title}
          </Button>
        ))}
        {isLoggedIn
          ? <LogoutButton onClick={handleClickLogout}>로그아웃</LogoutButton>
          : <LoginButton>로그인</LoginButton>}
      </RightSideArea>
    </HeaderArea>
  );
};

const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSideArea = styled.div`
  display: flex;
  align-items: center;
`;

const RightSideArea = styled.div`
  display: flex;
  align-items: center;
`;

const LogoTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

const TempCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #EAEAEA;
  margin-bottom: 8px;
`;

const Button = styled.button`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 64px;
  height: 64px;
  margin-left: 8px;
`;

const LoginButton = styled(GitHubOAuthAnchor)`
  font-size: 14px;
  color: #434343;
  padding: 16px;
  background: #C4C4C4;
  border-radius: 10px;
  margin: 0 0 auto 16px;
`;

const LogoutButton = styled.button`
  font-size: 14px;
  color: #434343;
  padding: 16px;
  background: #C4C4C4;
  border-radius: 10px;
  margin: 0 0 auto 16px;
`;

export default withPromiseComponent(
  () => <div>로딩중...</div>,
  Header,
  () => <div>에러</div>,
);
