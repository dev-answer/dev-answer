import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { Comment_comment } from '__generated__/Comment_comment.graphql';

interface Props {
  comment: Comment_comment
}

const Comment: React.FC<Props> = ({ comment }) => (
  <li>
    <div>
      유저 :
      {' '}
      {comment.userEmail}
    </div>
    <div>
      {comment.content}
    </div>
    <div>
      좋아요 :
      {' '}
      {comment.like}
    </div>
    <div>
      싫어요 :
      {' '}
      {comment.dislike}
    </div>
  </li>
);

export default createFragmentContainer(Comment, {
  comment: graphql`
    fragment Comment_comment on Comment{
      id
      questionId
      createdAt
      userEmail
      content
      like
      dislike
    }
  `,
});
