import React, {
  useEffect, useCallback, useState, Suspense,
} from 'react';

import {
  graphql, useMutation, usePreloadedQuery, useQueryLoader, PreloadedQuery,
} from 'react-relay';
import { RecordSourceSelectorProxy } from 'relay-runtime';

import styled from '@emotion/styled';

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

  const handleChangeInput = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <Gradient top="280px" height="100px" />
        <Section>
          <SubTitle>다른 사람의 답변이 궁금하다면?</SubTitle>
          <LoginButton type="button">
            <GitHubOAuthAnchor>GitHub으로 로그인하기</GitHubOAuthAnchor>
          </LoginButton>
        </Section>
      </>
    );
  }

  return (
    <>
      <Gradient top="550px" height="50px" />
      <Form onSubmit={handleSubmit}>
        <FormInput
          placeholder="제 생각에는..."
          value={commentInput}
          onChange={handleChangeInput}
        />
        <SubmitButton type="submit">
          등록
        </SubmitButton>
      </Form>
    </>
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

const Section = styled.section`
  position: absolute;
  top: 380px;
  height: 300px;
  width: 100%;
  background: #C5C9E1;
  text-align: center;
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: 30px;
  line-height: 35px;
  color: #230640;
  margin-top: 100px;
`;

const LoginButton = styled.button`
  width: 184px;
  height: 48px;
  background: #FFE666;
  border-radius: 10px;
  margin-top: 20px;
`;

type GradientProps = {
  top: string;
  height: string;
}

const Gradient = styled.div`
  position: fixed;
  top: ${(props: GradientProps) => props.top};
  width: 650px;
  height: ${(props: GradientProps) => props.height};
  background: linear-gradient(rgba(197, 201, 225, 0.2), rgba(197, 201, 225, 1));
`;

const Form = styled.form`
  position: fixed;
  height: 110px;
  width: 650px;
  text-align: center;
  top: 596px;
  background: #C5C9E1;
  border-radius: 10px;
  /* border: 1px solid black; */
`;

const FormInput = styled.textarea`
  width: 550px;
  height: 88px;
  background: #F6F6FA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  border: none;
  padding: 8px;
  resize: none;
  outline: none;
`;

const SubmitButton = styled.button`
  position: relative;
  margin-left: 8px;
  top: -40px;
  width: 57px;
  height: 88px;
  background: #FFE666;
  border-radius: 10px;
`;

export default CommentInputFormContainer;
