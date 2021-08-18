import React, { useEffect, Suspense } from 'react';

import {
  graphql, usePreloadedQuery, PreloadedQuery, useQueryLoader,
} from 'react-relay';

import { CommentListQuery } from '../../__generated__/CommentListQuery.graphql';

import { LOCALSTORAGE_ACCESS_TOKEN_KEY } from '../../constants/domain';

import Comment from './Comment';
import GitHubOAuthAnchor from '../Login/GitHubOAuthAnchor';

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

  if (!isLoggedIn) {
    return (
      <div>
        {comments.length === 0
          ? <p />
          : (
            <ol>
              {comments.slice(0, 1).map((comment) => (
                <li key={comment.id}>
                  <Comment comment={comment} />
                </li>
              ))}
            </ol>
          )}
        <p>
          다른 사람의 답변이 궁금하다면?
        </p>
        <GitHubOAuthAnchor>GitHub으로 로그인하기</GitHubOAuthAnchor>
      </div>
    );
  }

  return (
    <div>
      {comments.length === 0
        ? <p>댓글이 없습니다</p>
        : (
          <ol>
            {comments.map((comment) => (
              <li key={comment.id}>
                <Comment comment={comment} />
              </li>
            ))}
          </ol>
        )}
    </div>
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
