import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { graphql, useFragment } from 'react-relay';

import { QuestionCard_question$key } from '__generated__/QuestionCard_question.graphql';

const questionCardFragment = graphql`
  fragment QuestionCard_question on Question {
    content
    category
  }
`;

interface Props {
  questionRef: QuestionCard_question$key
  onClick: () => void
}

const QuestionCard: React.FC<Props> = ({ questionRef, onClick }) => {
  const {
    content, category,
  } = useFragment<QuestionCard_question$key>(questionCardFragment, questionRef);

  const handleClickCard = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Card onClick={handleClickCard}>
      <Content>{content}</Content>
      <Category>{category}</Category>
    </Card>
  );
};

const Card = styled.a`
  display: flex;
  flex-direction: column;
  transition: 300ms;
  background: #EAEAEA;
  border-radius: 15px;
  padding: 24px;
  box-sizing: border-box;
  margin: 12px 10px;
  cursor: pointer;
  min-width: 277px;
  width: 277px;
  height: 325px;

  &:hover {
    background: #D7D7D7
  }
`;
const Content = styled.p`
  color: #757575;
`;
const Category = styled.p`
  display: block;
  margin: auto 0 0 auto;
  font-size: 30px;
  line-height: 23px;
  color: #FF0000;
`;

export default QuestionCard;
