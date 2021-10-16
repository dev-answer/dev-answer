import React, { useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useHistory, useParams } from 'react-router-dom';

import { QuestionBoardPageQuery } from '__generated__/QuestionBoardPageQuery.graphql';

import styled from '@emotion/styled';

import { useTheme } from '@emotion/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PageLoading from '../components/common/PageLoading';
import withSuspense from '../hocs/withSuspense';
import QuestionCard from '../components/Question/QuestionCard';
import HambugerIcon from '../components/Icon/HambugerIcon';
import FilterIcon from '../components/Icon/FilterIcon';
import PageNavigator from '../components/common/PageNavigator';

const QUESTION_COUNT_PER_PAGE = 10;

const questionBoardPageQuery = graphql`
  query QuestionBoardPageQuery($categoryId: String!) {
    allQuestionCategories {
      id
      title
    }
    questionsByCategoryId(categoryId: $categoryId) {
      id
      ...QuestionCard_question
    }
  }
`;

const QuestionBoardPage: React.FC = () => {
  const theme = useTheme();
  const { push } = useHistory();

  const { categoryId } = useParams<{ categoryId: string}>();
  const { questionsByCategoryId, allQuestionCategories } = useLazyLoadQuery<QuestionBoardPageQuery>(
    questionBoardPageQuery, { categoryId },
  );
  const [page, setPage] = useState(1);
  const totalPageCount = Math.ceil(
    questionsByCategoryId.length / QUESTION_COUNT_PER_PAGE,
  );

  const targetCategory = allQuestionCategories.find((category) => category.id === categoryId)!;

  const handleClickQuestionCard = (questionId: string) => {
    push(`/question/detail/${questionId}`);
  };

  const handleClickPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const currentPageQuestionsRef = questionsByCategoryId
    .slice((page - 1) * QUESTION_COUNT_PER_PAGE, page * QUESTION_COUNT_PER_PAGE);

  return (
    <QuestionBoard>
      <Header />
      <Layout>
        <QuestionBoardSubHeader>
          <TitleWrapper>
            <CategoryTitle>{targetCategory.title}</CategoryTitle>
            <CategorySubTitle>_level 1</CategorySubTitle>
          </TitleWrapper>
          <SettingButtonWrapper>
            <MenuButton>
              <HambugerIcon size={30} color={theme.colors.$4} />
            </MenuButton>
            <FilterButton>
              <FilterText>최근 풀이 순</FilterText>
              <FilterIcon size={18} color={theme.colors.$6} />
            </FilterButton>
          </SettingButtonWrapper>
        </QuestionBoardSubHeader>
        <QuestionLayoutWrapper>
          {currentPageQuestionsRef.map((questionRef) => (
            <QuestionCard
              key={questionRef.id}
              questionRef={questionRef}
              onClick={() => handleClickQuestionCard(questionRef.id)}
            />
          ))}
        </QuestionLayoutWrapper>
        <PageNavigatorLayout>
          <PageNavigator
            unselectedFontColor={theme.colors.$t4}
            selectedColor={theme.colors.$6}
            unselectedColor={theme.colors.$4}
            totalPageCount={totalPageCount}
            currentPage={page}
            onClickPage={handleClickPage}
          />
        </PageNavigatorLayout>
      </Layout>
      <Footer />
    </QuestionBoard>
  );
};

const QuestionBoard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;  
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100%;
`;

const QuestionLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
`;

const QuestionBoardSubHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin: 24px 0 36px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CategoryTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.$t4};;
`;

const CategorySubTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.$t4};;
  padding-bottom: 4px;
`;

const SettingButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;

  &:hover {
    opacity: 0.7;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.$t4};;
  background: ${({ theme }) => theme.colors.$4};
  border-radius: 8px;
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

const PageNavigatorLayout = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 16px;
`;

export default withSuspense(QuestionBoardPage, PageLoading);
