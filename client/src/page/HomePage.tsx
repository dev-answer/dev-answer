import React from 'react';

import styled from '@emotion/styled';

import { useTheme } from '@emotion/react';
import { useLazyLoadQuery, graphql } from 'react-relay';
import { HomePageQuery } from '__generated__/HomePageQuery.graphql';
import { useHistory } from 'react-router-dom';
import PageLoading from '../components/common/PageLoading';
import GitHubOAuthAnchor from '../components/Login/GitHubOAuthAnchor';
import Logo from '../components/Icon/Logo';
import withPromiseComponent from '../hocs/withPromiseComponent';
import Header from '../components/common/Header';
import FilterIcon from '../components/Icon/FilterIcon';
import Footer from '../components/common/Footer';

const homePageQuery = graphql`
  query HomePageQuery {
    allQuestionCategories {
      id
      title
      count
    }
  }
`;

const HomePage: React.FC = () => {
  const theme = useTheme();
  const history = useHistory();

  const { allQuestionCategories } = useLazyLoadQuery<HomePageQuery>(homePageQuery, {});

  const handleClickCategoryItem = (categoryId: string) => {
    history.push(`/question/board/${categoryId}`);
  };

  return (
    <>
      <Header logoColor={theme.colors.$2} backgroundColor={theme.colors.$t4} />
      <Banner>
        <BannerItemArea>
          <Logo size={350} color={theme.colors.$2} />
          <LoginButton>GitHub으로 로그인</LoginButton>
        </BannerItemArea>
      </Banner>
      <CardsArea>
        <CardTitleArea>
          <CardTitle>과목</CardTitle>
          <FilterButton>
            <FilterText>최근 풀이 순</FilterText>
            <FilterIcon size={14} color={theme.colors.$6} />
          </FilterButton>
        </CardTitleArea>
        <Cards>
          {allQuestionCategories.filter(({ count }) => count > 0).map((category) => (
            <CategoryCard key={category.id} onClick={() => handleClickCategoryItem(category.id)}>
              <CateogryCount>{`0/${category.count}`}</CateogryCount>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryCard>
          ))}
        </Cards>
      </CardsArea>
      <LogoArea>
        <CircleLogo>
          <Logo size={350} noText />
        </CircleLogo>
        <LogoAreaTitle>Dev-Answer</LogoAreaTitle>
        <LogoAreaDescription>
          개발자 취업을 희망하는 사람들이 모여 만드는
          <br />
          기술 면접 질문 & 답변 커뮤니티
        </LogoAreaDescription>
      </LogoArea>

      <FooterLoginArea>
        <LoginButton>GitHub으로 로그인</LoginButton>
      </FooterLoginArea>

      <Footer />
    </>
  );
};

const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.$t4};
  height: 284px;
`;

const BannerItemArea = styled.div`
  display: flex;
  align-items: flex-end;
  width: 950px;
`;

const LoginButton = styled(GitHubOAuthAnchor)`
  display: block;
  background: ${({ theme }) => theme.colors.$y6};
  padding: 16px 40px;
  width: max-content;
  border-radius: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.$t4};
  margin: 0 0 16px 16px;
  
  &:hover {
    opacity: 0.7;
  }
`;

const CardsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 950px;
  margin: 64px 0 36px 0;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.$t4};
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 182px 182px 182px 182px 182px;
  grid-gap: 10px;
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${({ theme }) => theme.colors.$2};
  border-radius: 15px;
  padding: 16px;
  cursor: pointer;
  width: 182px;
  height: 224px;

  &:hover {
    opacity: 0.7;
  }
`;

const CateogryCount = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.$t4};;
`;

const CategoryTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.$t4};;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.$t4};
  height: 42px;
  background: ${({ theme }) => theme.colors.$4};
  border-radius: 8px;
  border: none;
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
  margin: 70px 0;
`;

const CircleLogo = styled.div`
  position: relative;
  margin-left: 212px;

  :after {
    content: '';
    position: absolute;
    width: 128px;
    height: 128px;
    border-radius: 64px;
    background: ${({ theme }) => theme.colors.$2};
    left: 12px;
    top: 12px;
    z-index: -1;
  }
`;

const LogoAreaTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.$t4};
`;

const LogoAreaDescription = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.$t2};
  margin-top: 16px;
`;

const FooterLoginArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0 92px 0;
`;

export default withPromiseComponent(
  () => <PageLoading />,
  HomePage,
  () => <div>에러</div>,
);
