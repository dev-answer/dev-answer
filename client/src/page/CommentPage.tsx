import React, {
  useState,
  useCallback,
} from 'react';

import {
  graphql,
  useMutation,
} from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';

import { CommentPageMutation } from '../__generated__/CommentPageMutation.graphql';

import CommentInputForm from '../components/Comment/CommentInputForm';
import CommentList from '../components/Comment/CommentList';

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

const CommentPage: React.FC = () => {
  const [commitComment, isLoading] = useMutation<CommentPageMutation>(CommentMutation);

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
      <CommentList />
      <CommentInputForm
        onSubmit={handleOnSubmit}
        onChange={handleOnChangeInput}
        commentInput={commentInput}
      />
    </section>
  );
};

export default CommentPage;
