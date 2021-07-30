import React, { useState, useCallback } from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import Environment from '../graphql';
import { CommentPageQuery } from '../__generated__/CommentPageQuery.graphql';

import Comment from '../components/Example/Comment';

const CommentPage: React.FC = () => {
  const [commentInput, setCommentInput] = useState('');

  const handleOnChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  }, []);

  const handleOnSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
  }, []);

  return (
    <QueryRenderer<CommentPageQuery>
      environment={Environment}
      query={graphql`
      query CommentPageQuery($questionId: Int) {
        comments(questionId: $questionId) {
          id
          ...Comment_comment
        }
      }
    `}
      variables={{
        questionId: 1,
      }}
      render={({ error, props }) => {
        if (!props) {
          return <div>...로딩중</div>;
        }

        if (error) {
          return <div>...에러발생</div>;
        }

        return (
          <section>
            <h2>
              댓글
            </h2>
            {props.comments.length === 0
              ? <p>댓글이 없습니다</p>
              : (
                <ol>
                  {props.comments.map((comment) => (
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
      }}
    />
  );
};

export default CommentPage;
