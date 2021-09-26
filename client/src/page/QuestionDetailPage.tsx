import React from 'react';

import { graphql, useLazyLoadQuery } from 'react-relay';

import { useParams } from 'react-router-dom';
import { useGetAuthStore } from '../contexts/AuthStore';
import QuestionDetailCard from '../components/Question/QuestionDetailCard';

import withPromiseComponent from '../hocs/withPromiseComponent';
import { QuestionDetailPageQuery } from '../__generated__/QuestionDetailPageQuery.graphql';

const questionDetailPageQuery = graphql`
  query QuestionDetailPageQuery($questionId: Int!, $accessToken: String!) {
    questionDetail(questionId: $questionId) {
      ...QuestionDetailCard_question
    }
    myInfo(accessToken: $accessToken) {
      ...QuestionDetailCard_user
    }
  }
`;

const QuestionDetailPage: React.FC = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const { accessToken } = useGetAuthStore();

  const questionRef = useLazyLoadQuery<QuestionDetailPageQuery>(
    questionDetailPageQuery, { questionId: Number(questionId), accessToken },
  );

  if (!questionRef.questionDetail) {
    return null;
  }

  return (
    <div>
      <QuestionDetailCard questionRef={questionRef.questionDetail} userRef={questionRef.myInfo} />
    </div>
  );
};

export default withPromiseComponent(
  () => <div>로딩중</div>,
  QuestionDetailPage,
  () => <div>에러 발생</div>,
);
