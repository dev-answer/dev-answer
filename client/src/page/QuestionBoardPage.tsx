import React, { useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useHistory, useParams } from 'react-router-dom';

import { QuestionBoardPageQuery } from '__generated__/QuestionBoardPageQuery.graphql';

import styled from '@emotion/styled';

import PageLoading from '../components/common/PageLoading';
import BottomSheet from '../components/common/BottomSheet';
import withSuspense from '../hocs/withSuspense';
import QuestionCard from '../components/Question/QuestionCard';
import HambugerIcon from '../components/Icon/HambugerIcon';
import FilterIcon from '../components/Icon/FilterIcon';
import PageNavigator from '../components/common/PageNavigator';

const QUESTION_COUNT_PER_PAGE = 10;

const questionBoardPageQuery = graphql`
  query QuestionBoardPageQuery($categoryId: String!) {
    questionsByCategoryId(categoryId: $categoryId) {
      id
      ...QuestionCard_question
    }
  }
`;

const QuestionBoardPage: React.FC = () => {
  const { push } = useHistory();

  const { categoryId } = useParams<{ categoryId: string}>();
  const questionsRef = useLazyLoadQuery<QuestionBoardPageQuery>(
    questionBoardPageQuery, { categoryId },
  );
  const [page, setPage] = useState(1);
  const totalPageCount = Math.ceil(
    questionsRef.questionsByCategoryId.length / QUESTION_COUNT_PER_PAGE,
  );

  const handleClickQuestionCard = (questionId: string) => {
    push(`/question/detail/${questionId}`);
  };

  const handleClickPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const currentPageQuestionsRef = questionsRef.questionsByCategoryId
    .slice((page - 1) * QUESTION_COUNT_PER_PAGE, page * QUESTION_COUNT_PER_PAGE);

  return (
    <QuestionBoard>
      <Layout>
        <Header>
          <TitleWrapper>
            <CategoryTitle>JavaScript</CategoryTitle>
            <CategorySubTitle>_level 1</CategorySubTitle>
          </TitleWrapper>
          <SettingButtonWrapper>
            <MenuButton>
              <HambugerIcon size={36} color="#C4C4C4" />
            </MenuButton>
            <FilterButton>
              <FilterText>최근 풀이 순</FilterText>
              <FilterIcon size={18} color="#959595" />
            </FilterButton>
          </SettingButtonWrapper>
        </Header>
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
          <PageNavigatorWrapper>
            <PageNavigator
              totalPageCount={totalPageCount}
              currentPage={page}
              onClickPage={handleClickPage}
            />
          </PageNavigatorWrapper>
        </PageNavigatorLayout>
      </Layout>
      <BottomSheet translateY="80%">
        <div style={{ height: '200px', background: 'yellow' }}>HelloWorld</div>

      </BottomSheet>
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
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const CategoryTitle = styled.h2`
  font-size: 48px;
  line-height: 55px;
  color: #757575;
`;
const CategorySubTitle = styled.h3`
  font-size: 24px;
  line-height: 35px;
  color: #757575;
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
  padding: 16px;
  font-size: 15px;
  line-height: 18px;
  color: #434343;
  height: 50px;
  background: #C4C4C4;
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
const PageNavigatorLayout = styled.div`
  height: 100%;
  position: relative;
`;
const PageNavigatorWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default withSuspense(QuestionBoardPage, PageLoading);
