import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { graphql, useFragment } from 'react-relay';

import { QuestionCard_question$key } from '__generated__/QuestionCard_question.graphql';

import BookmarkIcon from '../../components/Icon/BookmarkIcon';
import QIcon from '../../components/Icon/QIcon';
import VoteIcon from '../../components/Icon/VoteIcon';
import CommentIcon from '../../components/Icon/CommentIcon';

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
  const { content } = useFragment<QuestionCard_question$key>(questionCardFragment, questionRef);

  const handleClickCard = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Card onClick={handleClickCard}>
      <IconLayout>
        <QIcon size={50} color="black" />
        <BookmarkButton>
          <BookmarkIcon size={50} color="#F5F5F5" />
        </BookmarkButton>
      </IconLayout>
      <Content>{content}</Content>
      <FooterWrapper>
        <Tags>#최신 #N사 기출</Tags>
        <IconsWrapper>
          <IconWrapper>
            <VoteIcon size={38} color="#A1A1A1" count={5} countColor="#FFFFFF" />
          </IconWrapper>
          <IconWrapper>
            <CommentIcon size={33} color="#A1A1A1" count={5} countColor="#FFFFFF" />
          </IconWrapper>
        </IconsWrapper>
      </FooterWrapper>
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
  cursor: pointer;
  width: 277px;
  height: 325px;
  margin: 12px 10px;

  &:hover {
    background: #D7D7D7
  }
`;
const Content = styled.p`
  display: flex;
  flex: 1;
  align-items: center;
  color: #757575;
  font-size: 18px;
`;
const IconLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BookmarkButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    svg {
      path {
        fill: white;
      }
    }
  }
`;
const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: auto;
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const IconWrapper = styled.div`
  margin-left: 8px;
`;
const Tags = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #757575;
`;

export default QuestionCard;
