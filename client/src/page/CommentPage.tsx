import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import Environment from '../graphql';
import { CommentPageQuery, CommentPageQueryResponse } from '../__generated__/CommentPageQuery.graphql';

import Comment from '../components/Example/Comment';

interface IRenderQuery {
  error: Error | null;
  props: CommentPageQueryResponse | null;
}

const renderQuery = ({ error, props }: IRenderQuery) => {
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
      {props.commentsOfQuestion.length === 0
        ? <p>댓글이 없습니다</p>
        : (
          <ol>
            {props.commentsOfQuestion.map((comment) => (
              <li key={comment.id}>
                <Comment comment={comment} />
              </li>
            ))}
          </ol>
        )}
    </section>
  );
};

const CommentPage: React.FC = () => (
  <QueryRenderer<CommentPageQuery>
    environment={Environment}
    query={graphql`
      query CommentPageQuery($questionId: Int) {
        commentsOfQuestion(questionId: $questionId) {
          id
          ...Comment_comment
        }
      }
    `}
    variables={{
      questionId: 1,
    }}
    render={renderQuery}
  />
);

export default CommentPage;
