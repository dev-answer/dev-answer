import React, { useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { QuestionBoardPageQuery } from '__generated__/QuestionBoardPageQuery.graphql';

import styled from '@emotion/styled';
import withSuspense from '../hocs/withSuspense';
import QuestionCard from '../components/Question/QuestionCard';

const QUESTION_COUNT_PER_PAGE = 10;

const questionBoardPageQuery = graphql`
  query QuestionBoardPageQuery {
    allQuestions {
      id
      ...QuestionCard_question
    }
  }
`;

const QuestionBoardPage: React.FC = () => {
  const questionsRef = useLazyLoadQuery<QuestionBoardPageQuery>(questionBoardPageQuery, {});
  const [page, setPage] = useState(1);

  const handleClickQuestionCard = () => {
    // TODO: 문제 상세 페이지로 이동
  };

  const currentPageQuestionsRef = questionsRef.allQuestions
    .slice((page - 1) * QUESTION_COUNT_PER_PAGE, page * QUESTION_COUNT_PER_PAGE);

  return (
    <Base>
      <Layout>
        <div>상단바가 들어갈 자리</div>
        <QuestionWrapper>
          {currentPageQuestionsRef
            .slice(0, QUESTION_COUNT_PER_PAGE / 2).map((questionRef) => (
              <QuestionCard
                key={questionRef.id}
                questionRef={questionRef}
                onClick={handleClickQuestionCard}
              />
            ))}
        </QuestionWrapper>
        <QuestionWrapper>
          {currentPageQuestionsRef
            .slice(QUESTION_COUNT_PER_PAGE / 2, QUESTION_COUNT_PER_PAGE).map((questionRef) => (
              <QuestionCard
                key={questionRef.id}
                questionRef={questionRef}
                onClick={handleClickQuestionCard}
              />
            ))}
        </QuestionWrapper>
        <div>페이지네이터가 들어갈 자리</div>
      </Layout>
    </Base>
  );
};

const Base = styled.div`
  display: flex;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const QuestionWrapper = styled.div`
  display: flex;
`;

export default withSuspense(QuestionBoardPage, () => <div>로딩중...</div>);
