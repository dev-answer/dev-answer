import React from 'react';

import { graphql, useMutation } from 'react-relay';

import { LikeButtonMutation } from '__generated__/LikeButtonMutation.graphql';

interface Props {
  commentId: string
  uid: string
}

const AddLikeMutation = graphql`
  mutation LikeButtonMutation(
    $commentId: String,
    $uid: String,
  ) {
    addLike(
      commentId: $commentId,
      uid: $uid,
    ) {
      ...Comment_comment
    }
  }
`;

export default function LikeButton({ commentId, uid }:Props) {
  const [commitAddLike] = useMutation<LikeButtonMutation>(AddLikeMutation);

  const handleClick = () => {
    commitAddLike({ variables: { commentId, uid } });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      좋아요
    </button>
  );
}
