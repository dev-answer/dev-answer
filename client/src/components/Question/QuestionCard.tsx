import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { graphql, useFragment } from 'react-relay';

import { QuestionCard_question$key } from '__generated__/QuestionCard_question.graphql';

import { getEllipsisStyle } from '../../style';
import BookmarkIcon from '../../components/Icon/BookmarkIcon';
import QIcon from '../../components/Icon/QIcon';
import VoteIcon from '../../components/Icon/VoteIcon';
import CommentIcon from '../../components/Icon/CommentIcon';

const questionCardFragment = graphql`
  fragment QuestionCard_question on Question {
    content
    votes {
      userId
    }
    comments {
      id
    }
  }
`;

interface Props {
  questionRef: QuestionCard_question$key
  onClick: () => void
}

const QuestionCard: React.FC<Props> = ({ questionRef, onClick }) => {
  const theme = useTheme();

  const {
    content, votes, comments,
  } = useFragment<QuestionCard_question$key>(questionCardFragment, questionRef);

  const handleClickCard = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Card onClick={handleClickCard}>
      <IconLayout>
        <QIcon width={40} height={40} color={theme.colors.$5} />
        <BookmarkButton>
          <BookmarkIcon size={36} color={theme.colors.$1} />
        </BookmarkButton>
      </IconLayout>
      <ContentArea>
        <Content>{content}</Content>
      </ContentArea>
      <FooterWrapper>
        <Tags>#최신 #N사 기출</Tags>
        <IconsWrapper>
          <IconWrapper>
            <VoteIcon size={28} color={theme.colors.$5} count={votes.length} countColor="#FFFFFF" />
          </IconWrapper>
          <IconWrapper>
            <CommentIcon size={24} color={theme.colors.$5} count={comments.length} countColor="#FFFFFF" />
          </IconWrapper>
        </IconsWrapper>
      </FooterWrapper>
    </Card>
  );
};

const Card = styled.a`
  display: flex;
  flex-direction: column;
  transition: 300ms background-color;
  background: ${({ theme }) => theme.colors.$2};
  border-radius: 10px;
  padding: 20px 16px 16px 16px;
  box-sizing: border-box;
  cursor: pointer;
  width: 228px;
  height: 280px;
  margin: 8px 6px;

  &:hover {
    background: ${({ theme }) => theme.colors.$3};
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Content = styled.p`
  color: ${({ theme }) => theme.colors.$t4};
  font-size: 16px;
  font-weight: bold;
  ${getEllipsisStyle(5)};
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
  font-size: 13px;
`;

const Tags = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.$t3};
`;

export default QuestionCard;
