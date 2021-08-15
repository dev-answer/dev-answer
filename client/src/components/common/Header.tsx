import React from 'react';
import styled from '@emotion/styled';

import GitHubOAuthAnchor from '../../components/Login/GitHubOAuthAnchor';

import Logo from '../Icon/Logo';

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
        <LoginOutButton>
          <GitHubOAuthAnchor>로그인</GitHubOAuthAnchor>
        </LoginOutButton>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64px;
  height: 64px;
  margin-left: 8px;
`;
const LoginOutButton = styled.button`
  padding: 16px;
  background: #C4C4C4;
  border-radius: 10px;
  margin: 0 0 auto 16px;
`;

export default Header;
