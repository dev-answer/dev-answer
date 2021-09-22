import React from 'react';

import { graphql, useLazyLoadQuery } from 'react-relay';

import { useParams } from 'react-router-dom';
import QuestionDetailCard from '../components/Question/QuestionDetailCard';

import withPromiseComponent from '../hocs/withPromiseComponent';
import { QuestionDetailPageQuery } from '../__generated__/QuestionDetailPageQuery.graphql';

const questionDetailPageQuery = graphql`
  query QuestionDetailPageQuery($questionId: Int!) {
    questionDetail(questionId: $questionId) {
      ...QuestionDetailCard_question
    }
  }
`;

const QuestionDetailPage: React.FC = () => {
  const { questionId } = useParams<{ questionId: string }>();

  const questionRef = useLazyLoadQuery<QuestionDetailPageQuery>(
    questionDetailPageQuery, { questionId: Number(questionId) },
  );

  if (!questionRef.questionDetail) {
    return null;
  }

  return (
    <div>
      <QuestionDetailCard questionRef={questionRef.questionDetail} />
    </div>
  );
};

export default withPromiseComponent(
  () => <div>로딩중</div>,
  QuestionDetailPage,
  () => <div>에러 발생</div>,
);
