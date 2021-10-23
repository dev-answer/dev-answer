import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import styled from '@emotion/styled';

import { Comment_comment } from '__generated__/Comment_comment.graphql';

import { getSlashDateFromDateTime } from '../../utils';

import UserInfo from './UserInfo';
import LikeButton from './LikeButton';

interface Props {
  comment: Comment_comment
}

const Comment: React.FC<Props> = ({ comment }) => {
  const {
    id, uid, like, content, createdAt,
  } = comment;

  if (!uid) {
    return <p>유저 정보를 불러오지 못했습니다</p>;
  }

  const createdTime = getSlashDateFromDateTime(createdAt);

  return (
    <CommentArea>
      <TopArea>
        <UserInfo uid={uid} />
        <CreatedTime>
          {createdTime}
        </CreatedTime>
        <LikeArea>
          <LikeButton
            commentId={id}
            uid={uid}
          />
          <LikeCount>
            {like?.length}
          </LikeCount>
        </LikeArea>
      </TopArea>
      <CommentContent>
        {content}
      </CommentContent>
    </CommentArea>
  );
};

export default createFragmentContainer(Comment, {
  comment: graphql`
    fragment Comment_comment on Comment{
      id
      questionId
      createdAt
      uid
      content
      like
    }
  `,
});

const CommentArea = styled.li`
  margin: 0 8px;
  padding: 16px;

  &:after {
    content: "";
    display: inline-block;
    background: ${({ theme }) => theme.colors.$2};
    height: 1px;
    width: 585px;
  }
`;

const TopArea = styled.div`
  display: flex;
`;

const LikeArea = styled.div`
  position: absolute;
  right: 100px;
`;

const LikeCount = styled.span`
  position: relative;
  top: 6px;
  left: 10px;
`;

const CommentContent = styled.p`
  width: 550px;
  padding-top: 16px;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.$t3};
`;

const CreatedTime = styled.p`
  position: relative;
  padding-left: 14px;
  top: 26px;
  font-size: 14px;
  line-height: 115%;
  color: ${({ theme }) => theme.colors.$t2};
`;
