import React, { useRef } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { QuestionBoardPageQuery } from '__generated__/QuestionBoardPageQuery.graphql';

import styled from '@emotion/styled';
import withSuspense from '../hocs/withSuspense';
import QuestionCard from '../components/Question/QuestionCard';

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
  const baseRef = useRef<HTMLDivElement>(null);

  const handleClickQuestionCard = () => {
    // TODO: 문제 상세 페이지로 이동
  };

  return (
    <Base ref={baseRef}>
      {questionsRef.allQuestions.map((questionRef) => (
        <QuestionCard
          key={questionRef.id}
          questionRef={questionRef}
          onClick={handleClickQuestionCard}
        />
      ))}
    </Base>
  );
};

const Base = styled.div`
  display: flex;
`;

export default withSuspense(QuestionBoardPage, () => <div>로딩중...</div>);
