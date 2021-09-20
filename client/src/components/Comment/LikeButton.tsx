import React from 'react';

import { graphql, useMutation } from 'react-relay';

import { LikeButtonMutation } from '__generated__/LikeButtonMutation.graphql';

interface Props {
  commentId: string
  uid: string
}

const ToggleLikeMutation = graphql`
  mutation LikeButtonMutation(
    $commentId: String,
    $uid: String,
  ) {
    toggleLike(
      commentId: $commentId,
      uid: $uid,
    ) {
      ...Comment_comment
    }
  }
`;

export default function LikeButton({ commentId, uid }:Props) {
  const [commitToggleLike] = useMutation<LikeButtonMutation>(ToggleLikeMutation);

  const handleClick = () => {
    commitToggleLike({ variables: { commentId, uid } });
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
