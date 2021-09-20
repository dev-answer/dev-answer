import React, { useEffect, Suspense } from 'react';

import {
  graphql, usePreloadedQuery, PreloadedQuery, useQueryLoader,
} from 'react-relay';

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
        {comments.slice(0, 1).map((comment) => (
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
    </ol>
  );
};

const CommentList: React.FC = () => {
  const [
    commentQueryRef,
    loadQuery,
    disposeQuery,
  ] = useQueryLoader<CommentListQuery>(CommentQuery);

  useEffect(() => {
    // TODO : 임시로 questionId: 1 불러옴. 질문 상세 페이지 완성 후 변수화 시킬 예정
    loadQuery({ questionId: 1 });
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

export default CommentList;
