import React, {
  useEffect, useCallback, useState, Suspense,
} from 'react';

import {
  graphql, useMutation, usePreloadedQuery, useQueryLoader, PreloadedQuery,
} from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';

import { CommentInputFormMutation } from '../../__generated__/CommentInputFormMutation.graphql';
import { CommentInputFormQuery } from '../../__generated__/CommentInputFormQuery.graphql';

import { LOCALSTORAGE_ACCESS_TOKEN_KEY } from '../../constants/domain';

import { useGetAuthStore } from '../../contexts/AuthStore';

import GitHubOAuthAnchor from '../Login/GitHubOAuthAnchor';

const CommentMutation = graphql`
  mutation CommentInputFormMutation(
    $questionId: Int,
    $uid: String,
    $content: String
  ) {
    addComment(
      questionId: $questionId,
      uid: $uid,
      content: $content
    ) {
      ...Comment_comment
    }
  }
`;

const MyInfoQuery = graphql`
  query CommentInputFormQuery($accessToken: String!) {
    myInfo(accessToken: $accessToken) {
      id
    }
  }
`;

interface Props{
  myInfoRef: PreloadedQuery<CommentInputFormQuery>;
}

const CommentInputForm: React.FC<Props> = ({ myInfoRef }) => {
  const { myInfo } = usePreloadedQuery<CommentInputFormQuery>(MyInfoQuery, myInfoRef);
  const [commitComment, isLoading] = useMutation<CommentInputFormMutation>(CommentMutation);
  const [commentInput, setCommentInput] = useState('');

  const handleChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();

    commitComment({
      variables: {
        questionId: 1, // TODO : 임시로 questionId: 1 불러옴. 질문 상세 페이지 완성 후 변수화 시킬 예정
        uid: myInfo?.id,
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

  const isLoggedIn = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);

  if (isLoading) {
    return <div>댓글 등록중..</div>;
  }

  if (!isLoggedIn) {
    return (
      <>
        <p>다른 사람의 답변이 궁금하다면?</p>
        <GitHubOAuthAnchor>GitHub으로 로그인하기</GitHubOAuthAnchor>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="commentInput">
        유저프로필
        <input
          type="text"
          id="commentInput"
          placeholder="제 생각에는..."
          value={commentInput}
          onChange={handleChangeInput}
        />
      </label>
      <button type="submit">
        등록
      </button>
    </form>
  );
};

const CommentInputFormContainer = () => {
  const [
    myInfoRef,
    loadQuery,
    disposeQuery,
  ] = useQueryLoader<CommentInputFormQuery>(MyInfoQuery);

  const { accessToken } = useGetAuthStore();

  useEffect(() => {
    loadQuery({ accessToken });

    return () => disposeQuery();
  }, [loadQuery, disposeQuery]);

  return (
    <Suspense fallback="로딩중..">
      {myInfoRef
      && <CommentInputForm myInfoRef={myInfoRef} />}
    </Suspense>
  );
};

export default CommentInputFormContainer;
