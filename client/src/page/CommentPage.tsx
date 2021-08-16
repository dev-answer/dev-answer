import React, {
  useState,
  Suspense,
  useEffect,
  useCallback,
} from 'react';

import {
  graphql,
  usePreloadedQuery,
  useQueryLoader,
  useMutation,
  PreloadedQuery,
} from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';

import { CommentPageQuery } from '../__generated__/CommentPageQuery.graphql';
import { CommentPageMutation } from '../__generated__/CommentPageMutation.graphql';

import Comment from '../components/Comment/Comment';
import CommentInputForm from '../components/Comment/CommentInputForm';

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

const CommentMutation = graphql`
  mutation CommentPageMutation(
    $questionId: Int,
    $userEmail: String,
    $content: String
  ) {
    addComment(
      questionId: $questionId,
      userEmail: $userEmail,
      content: $content
    ) {
      ...Comment_comment
    }
  }
`;

const CommentContainer: React.FC<Props> = ({ commentQueryRef }) => {
  const [commitComment, isLoading] = useMutation<CommentPageMutation>(CommentMutation);

  const { comments } = usePreloadedQuery(CommentQuery, commentQueryRef);

  const [commentInput, setCommentInput] = useState('');

  const handleOnChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  }, []);

  const handleOnSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();

    commitComment({
      variables: {
        questionId: 1, // TODO : 임시로 questionId: 1 불러옴. 질문 상세 페이지 완성 후 변수화 시킬 예정
        userEmail: 'inseo@test.com',
        content: commentInput,
      },
      updater: (store: RecordSourceSelectorProxy) => {
        const rootStore = store.get('client:root');
        const originComments = rootStore?.getLinkedRecords('comments(questionId:1)');
        const payload = store.getRootField('addComment');

        if (Array.isArray(originComments)) {
          const newComments = [...originComments, payload];
          rootStore?.setLinkedRecords(newComments, 'comments(questionId:1)');
        }
      },
    });

    setCommentInput('');
  }, [commentInput]);

  if (isLoading) {
    return <div>댓글 등록중..</div>;
  }

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
      <CommentInputForm
        onSubmit={handleOnSubmit}
        onChange={handleOnChangeInput}
        commentInput={commentInput}
      />
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
    // TODO : 임시로 questionId: 1 불러옴. 질문 상세 페이지 완성 후 변수화 시킬 예정
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
