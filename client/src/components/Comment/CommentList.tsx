import React, { useEffect, Suspense } from 'react';

import {
  graphql, usePreloadedQuery, PreloadedQuery, useQueryLoader,
} from 'react-relay';

import styled from '@emotion/styled';

import { CommentListQuery } from '../../__generated__/CommentListQuery.graphql';

import { LOCALSTORAGE_ACCESS_TOKEN_KEY } from '../../constants/domain';

import Comment from './Comment';

interface Props{
  commentQueryRef: PreloadedQuery<CommentListQuery>;
}

const CommentQuery = graphql`
  query CommentListQuery($questionId: Int) {
    comments(questionId: $questionId) {
      id
      ...Comment_comment
    }
  }
`;

const CommentListContainer: React.FC<Props> = ({ commentQueryRef }) => {
  const { comments } = usePreloadedQuery(CommentQuery, commentQueryRef);

  const isLoggedIn = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);

  if (!comments.length) {
    return <p>댓글이 없습니다</p>;
  }

  if (!isLoggedIn) {
    return (
      <ol>
        {comments.slice(0, 2).map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
          />
        ))}
      </ol>
    );
  }

  return (
    <ol>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))}
      <Space />
    </ol>
  );
};

interface CommentListProps{
  questionId: number;
}

const CommentList: React.FC<CommentListProps> = ({ questionId }) => {
  const [
    commentQueryRef,
    loadQuery,
    disposeQuery,
  ] = useQueryLoader<CommentListQuery>(CommentQuery);

  useEffect(() => {
    loadQuery({ questionId });
    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery]);

  return (
    <Suspense fallback="로딩중..">
      {commentQueryRef
      && <CommentListContainer commentQueryRef={commentQueryRef} />}
    </Suspense>
  );
};

const Space = styled.div`
  height: 120px;
`;

export default CommentList;
