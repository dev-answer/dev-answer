import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { graphql, useFragment } from 'react-relay';

import { QuestionCard_question$key } from '__generated__/QuestionCard_question.graphql';

const questionCardFragment = graphql`
  fragment QuestionCard_question on Question {
    content
    category
  }
`;

type Size = 'small' | 'middle'

interface Props {
  questionRef: QuestionCard_question$key
  size: Size
  onClick: () => void
}

const QuestionCard: React.FC<Props> = ({ questionRef, size, onClick }) => {
  const {
    content, category,
  } = useFragment<QuestionCard_question$key>(questionCardFragment, questionRef);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (size === 'middle') {
      setAnimation(true);
    }
  }, []);

  return (
    <Base onClick={onClick} animation={animation} size={size}>
      <Content>{content}</Content>
      <Category>{category}</Category>
    </Base>
  );
};

const Base = styled.section<{ animation: boolean; size: Size }>`
  display: flex;
  flex-direction: column;
  transition: 300ms;
  background: #EAEAEA;
  border-radius: 15px;
  padding: 32px;
  box-sizing: border-box;
  margin: 15px 10px;
  cursor: pointer;
  ${({ animation, size }) => {
    if (size === 'small') {
      return `
        width: 276px;
        height: 322px;
      `;
    }

    if (size === 'middle') {
      if (animation) {
        return `
          transform: scale(1);
          width: 573px;
          height: 664px;
        `;
      }

      return `
        transform: scale(0.5);
        width: 276px;
        height: 322px;
      `;
    }

    return null;
  }};
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
