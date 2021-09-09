import React from 'react';

import styled from '@emotion/styled';

import GitHubOAuthAnchor from '../components/Login/GitHubOAuthAnchor';
import Logo from '../components/Icon/Logo';
import withPromiseComponent from '../hocs/withPromiseComponent';
import Header from '../components/common/Header';
import FilterIcon from '../components/Icon/FilterIcon';

const HomePage: React.FC = () => (
  <>
    <Header logoColor="#E2E5F3" backgroundColor="#230640" />
    <Banner>
      <BannerItemArea>
        <Logo size={500} color="#E2E5F3" />
        <LoginButton>GitHub으로 로그인</LoginButton>
      </BannerItemArea>
    </Banner>
    <CardsArea>
      <CardTitleArea>
        <CardTitle>과목</CardTitle>
        <FilterButton>
          <FilterText>최근 풀이 순</FilterText>
          <FilterIcon size={18} color="#626DAD" />
        </FilterButton>
      </CardTitleArea>
      <Cards>
        {Array(10).fill(null).map((v, i) => v + i).map((v) => <DummyCard key={v} />)}
      </Cards>
    </CardsArea>
    <LogoArea>
      <CircleLogo>
        <Logo size={500} noText />
      </CircleLogo>
      <LogoAreaTitle>Dev-Answer</LogoAreaTitle>
      <LogoAreaDescription>
        개발자 취업을 희망하는 사람들이 모여 만드는
        <br />
        기술 면접 질문 & 답변 커뮤니티
      </LogoAreaDescription>
    </LogoArea>
  </>
);

const Banner = styled.section`
  display: flex;
  align-items: center;
  background: #230640;
  height: 424px;
`;

const BannerItemArea = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 15%;
`;

const LoginButton = styled(GitHubOAuthAnchor)`
  background: #FFE666;
  padding: 16px 40px;
  width: max-content;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 300ms;
  color: #230640;
  margin: 0 0 28px 16px;
  
  &:hover {
    opacity: 0.7;
    color: #000000;
  }
`;

const CardsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

const CardTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1428px;
  padding: 16px 0;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #230640;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 272px 272px 272px 272px 272px;
  grid-gap: 16px;
`;

const DummyCard = styled.div`
  display: flex;
  flex-direction: column;
  transition: opacity, 300ms;
  background: #ECEDF5;
  border-radius: 15px;
  padding: 24px;
  box-sizing: border-box;
  cursor: pointer;
  width: 277px;
  height: 325px;

  &:hover {
    opacity: 0.7;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 15px;
  line-height: 18px;
  color: #434343;
  height: 50px;
  background: #C5C9E1;
  border-radius: 10px;
  border: none;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const FilterText = styled.p`
  margin-right: 8px;
`;

const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
`;

const CircleLogo = styled.div`
  position: relative;
  margin-left: 300px;

  :after {
    content: '';
    position: absolute;
    width: 176px;
    height: 176px;
    border-radius: 88px;
    background:#E2E5F3;
    left: 12px;
    top: 16px;
    z-index: -1;
  }
`;

const LogoAreaTitle = styled.div`
  font-size: 48px;
  color: #230640;
`;

const LogoAreaDescription = styled.div`
  font-size: 24px;
  text-align: center;
  color: #4F3866;
  margin-top: 24px;
`;

export default withPromiseComponent(
  () => <div>로딩중</div>,
  HomePage,
  () => <div>에러</div>,
);
