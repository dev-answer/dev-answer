import React from 'react';
import styled from '@emotion/styled';

import { LOCALSTORAGE_ACCESS_TOKEN_KEY } from '../../constants/domain';
import GitHubOAuthAnchor from '../../components/Login/GitHubOAuthAnchor';

import Logo from '../Icon/Logo';

// TODO: 서버쪽에 accessToken 기반으로 나의 정보를 불러오는 로직이 완료되면, isLoggedIn을 그걸 사용하는 것으로 교체
const Header: React.FC = () => {
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

  const isLoggedIn = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);

  const handleClickLogout = () => {
    localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
    window.location.reload();
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

export default Header;
