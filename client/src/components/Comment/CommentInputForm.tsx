import React, { useCallback, useState } from 'react';

import { graphql, useMutation } from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';

import { CommentInputFormMutation } from '../../__generated__/CommentInputFormMutation.graphql';

import { LOCALSTORAGE_ACCESS_TOKEN_KEY } from '../../constants/domain';

const CommentMutation = graphql`
  mutation CommentInputFormMutation(
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

const CommentInputForm: React.FC = () => {
  const [commitComment, isLoading] = useMutation<CommentInputFormMutation>(CommentMutation);

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

  const isLoggedIn = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);

  if (!isLoggedIn) {
    return <></>;
  }

  return (
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
      <button type="submit">
        등록
      </button>
    </form>
  );
};

export default CommentInputForm;
