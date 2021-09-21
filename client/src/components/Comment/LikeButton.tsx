import React from 'react';

import { graphql, useMutation } from 'react-relay';

import styled from '@emotion/styled';

import { LikeButtonMutation } from '__generated__/LikeButtonMutation.graphql';

import HeartIcon from '../Icon/HeartIcon';

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
    <Button
      type="button"
      onClick={handleClick}
    >
      <HeartIcon size={23} color="none" />
    </Button>
  );
}

const Button = styled.button`
  position: relative;
  top: 10px;
`;
