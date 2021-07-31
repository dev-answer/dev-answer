import React, {
  useState, useCallback, Suspense, useEffect,
} from 'react';
import {
  graphql, usePreloadedQuery, useQueryLoader, PreloadedQuery,
} from 'react-relay';

import { CommentPageQuery } from '../__generated__/CommentPageQuery.graphql';

import Comment from '../components/Example/Comment';

type Props = {
  commentQueryRef: PreloadedQuery<CommentPageQuery>
}

const CommentQuery = graphql`
  query CommentPageQuery($questionId: Int) {
    comments(questionId: $questionId) {
      id
      ...Comment_comment
    }
  }
`;

const CommentContainer: React.FC<Props> = ({ commentQueryRef }) => {
  const { comments } = usePreloadedQuery(CommentQuery, commentQueryRef);

  const [commentInput, setCommentInput] = useState('');

  const handleOnChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  }, []);

  const handleOnSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
  }, []);

  return (
    <section>
      <h2>
        댓글
      </h2>
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
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="commentInput">
          유저프로필
          <input
            type="text"
            id="commentInput"
            placeholder="제 생각에는..."
            value={commentInput}
            onChange={handleOnChangeInput}
          />
        </label>
        <input type="submit" value="등록" />
      </form>
    </section>
  );
};

const CommentPage: React.FC = () => {
  const [
    commentQueryRef,
    loadQuery,
    disposeQuery,
  ] = useQueryLoader<CommentPageQuery>(CommentQuery);

  useEffect(() => {
    loadQuery({ questionId: 1 });
    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery]);

  return (
    <>
      <Suspense fallback="로딩중..">
        {commentQueryRef != null
          ? (
            <CommentContainer
              commentQueryRef={commentQueryRef}
            />
          ) : null}
      </Suspense>
    </>
  );
};

export default CommentPage;
