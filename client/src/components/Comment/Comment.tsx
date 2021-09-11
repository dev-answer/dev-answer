import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import styled from '@emotion/styled';

import { Comment_comment } from '__generated__/Comment_comment.graphql';

import UserInfo from './UserInfo';
import LikeButton from './LikeButton';

interface Props {
  comment: Comment_comment
}

const Comment: React.FC<Props> = ({ comment }) => {
  const {
    id, uid, like, content,
  } = comment;

  if (!uid) {
    return <p>유저 정보를 불러오지 못했습니다</p>;
  }

  return (
    <CommentArea>
      <UserInfo uid={uid} />
      <LikeButton
        commentId={id}
        uid={uid}
      />
      <span>{like?.length}</span>
      <p>
        {content}
      </p>
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
      dislike
    }
  `,
});

const CommentArea = styled.li`
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
`;
