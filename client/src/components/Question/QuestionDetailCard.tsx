import React, { ChangeEvent, useMemo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { graphql, useFragment, useMutation } from 'react-relay';

import { QuestionDetailCard_user$key } from '__generated__/QuestionDetailCard_user.graphql';
import { QuestionDetailCard_question$key } from '../../__generated__/QuestionDetailCard_question.graphql';

import QIcon from '../../components/Icon/QIcon';
import BookmarkIcon from '../../components/Icon/BookmarkIcon';

const questionDetailCardFragment = graphql`
  fragment QuestionDetailCard_question on Question {
    id
    content
    votes {
      userId
      kind
    }
    author {
      name
      gitHubURL
      profileImageURL
      id
    }
  }
`;

const questionDetailCardMyInfoFragment = graphql`
  fragment QuestionDetailCard_user on User {
    id
  }
`;

const quetionDetailCardVoteMutation = graphql`
  mutation QuestionDetailCardVoteMutation($questionId: Int!, $userId: String!, $kind: String!) {
    vote(questionId: $questionId, userId: $userId, kind: $kind) {
      votes {
        userId
        kind
      }
    }
  }
`;

interface Props {
  questionRef: QuestionDetailCard_question$key
  userRef: QuestionDetailCard_user$key | null
}

const QuestionDetailCard: React.FC<Props> = ({ questionRef, userRef }) => {
  const theme = useTheme();

  const {
    id, content, author, votes,
  } = useFragment<QuestionDetailCard_question$key>(
    questionDetailCardFragment, questionRef,
  );
  const myInfo = useFragment<QuestionDetailCard_user$key>(
    questionDetailCardMyInfoFragment, userRef,
  );

  const [commitVote] = useMutation(quetionDetailCardVoteMutation);

  const myVoteKind = useMemo(() => votes.find((vote) => vote.userId === myInfo?.id)?.kind, [votes]);

  const handleChangeVote = (e: ChangeEvent<HTMLInputElement>) => {
    if (!myInfo) {
      alert('로그인을 하셔야 투표하실 수 있습니다. 로그인 하러가기 >');
      return;
    }

    const voteKind = e.target.id;
    commitVote({
      variables: {
        questionId: Number(id),
        userId: myInfo.id,
        kind: voteKind,
      },
      optimisticUpdater: (store) => {
        const questionRecord = store.get(id);
        const voteRecords = questionRecord?.getLinkedRecords('votes');

        if (!questionRecord || !voteRecords) {
          return;
        }

        const myVoteIndex = votes.findIndex((vote) => vote.userId === myInfo?.id);
        const alreadyHasBeenVoted = Boolean(myVoteIndex >= 0);

        if (alreadyHasBeenVoted) {
          voteRecords[myVoteIndex].setValue(voteKind, 'kind');
          return;
        }

        const newVoteRecord = store.create(`client:${id}:votes:${voteRecords.length}`, 'QuestionVote');
        newVoteRecord.setValue(myInfo.id, 'userId');
        newVoteRecord.setValue(voteKind, 'kind');

        questionRecord.setLinkedRecords([...voteRecords, newVoteRecord], 'votes');
      },
    });
  };

  const voteCounter = useMemo(
    () => votes.reduce((acc, cur) => ({ ...acc, [cur.kind]: (acc[cur.kind] ?? 0) + 1 }), {} as any),
    [votes],
  );

  // 북마크쪽 서버 로직 완료되면 북마크도 퀘스쳔 데이터에 어그리게이트해서 내려주고, 이를 이용해서 조건부 렌더링 실행
  const isBookmarked = Math.random() > 0.5;

  return (
    <CardArea>
      <div>
        <BookmarkButton>
          <BookmarkIcon size={84} color={isBookmarked ? theme.colors.$5 : theme.colors.$1} />
        </BookmarkButton>
        <QIcon size={72} color={theme.colors.$4} />

        <Question>{content}</Question>
      </div>

      <div>
        <AuthorArea>
          <AuthorImage src={author.profileImageURL} alt={`${author.name}의 GitHub 프로필 이미지`} />
          <AuthorNickname href={author.gitHubURL}>{author.name}</AuthorNickname>
        </AuthorArea>

        <Divider />

        <FlexArea>
          <Information>
            <InformationTitle>정보</InformationTitle>
            <Divider />
            <InformationContent>N사 기출</InformationContent>
            <InformationContent>Level 1</InformationContent>
          </Information>

          <Information>
            <InformationTitle>투표하기</InformationTitle>
            <Divider />

            <VoteRadioLabel htmlFor="easy">
              😏쉬워요
              <VoteCounter>{voteCounter.easy}</VoteCounter>
              <RadioRabel htmlFor="easy">
                <input
                  type="radio"
                  checked={myVoteKind === 'easy'}
                  onChange={handleChangeVote}
                  name="question_detail_vote"
                  id="easy"
                />
              </RadioRabel>
            </VoteRadioLabel>
            <VoteRadioLabel htmlFor="normal">
              😍좋아요
              <VoteCounter>{voteCounter.normal}</VoteCounter>
              <RadioRabel htmlFor="normal">
                <input
                  type="radio"
                  checked={myVoteKind === 'normal'}
                  onChange={handleChangeVote}
                  name="question_detail_vote"
                  id="normal"
                />
              </RadioRabel>
            </VoteRadioLabel>
            <VoteRadioLabel htmlFor="hard">
              😫어려워요
              <VoteCounter>{voteCounter.hard}</VoteCounter>
              <RadioRabel htmlFor="hard">
                <input
                  type="radio"
                  checked={myVoteKind === 'hard'}
                  onChange={handleChangeVote}
                  name="question_detail_vote"
                  id="hard"
                />
              </RadioRabel>
            </VoteRadioLabel>

          </Information>
        </FlexArea>

        <Divider />

        <InformationTitle>연관질문</InformationTitle>
        <Divider />
        <InformationContentWithMargin>프론트엔드 개발자가 되기로 결심한 이유는?</InformationContentWithMargin>
        <InformationContentWithMargin>마음이 맞지 않는 동료와 의견 충돌 경험?</InformationContentWithMargin>
        <InformationContentWithMargin>프로젝트를 진행하며 겪은 트러블 슈팅?</InformationContentWithMargin>
      </div>
    </CardArea>
  );
};

const CardArea = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 704px;
  height: 664px;
  background: ${({ theme }) => theme.colors.$3};
  border: 3px solid ${({ theme }) => theme.colors.$3};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 64px 48px 40px 48px;
  margin: 16px;
`;

const BookmarkButton = styled.button`
  position: absolute;
  right: 40px;
  top: -10px;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

const Question = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.$t4};
  margin-top: 16px;
  overflow: scroll;
  max-height: 108px;
`;

const AuthorArea = styled.div`
  display: flex;
  align-items: flex-end;
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.$1};
  background: ${({ theme }) => theme.colors.$1};
`;

const AuthorNickname = styled.a`
  font-size: 18px;
  line-height: 135%;
  color: ${({ theme }) => theme.colors.$t2};
  text-decoration: none;
  cursor: pointer;
  margin-left: 8px;
`;

const FlexArea = styled.div`
  display: flex;
`;

const Information = styled.div`
  flex: 1;
`;

const InformationTitle = styled.h4`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.$t2};
`;

const InformationContent = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.$t2};
`;

const VoteRadioLabel = styled.label`
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  background: ${({ theme }) => theme.colors.$4};
  width: 100%;
  margin: 8px 0;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.$t4};
  cursor: pointer;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const VoteCounter = styled.p`
  margin-left: 8px;
`;

const RadioRabel = styled.label`
  display: block;
  height: 100%;
  margin-left: auto;

  input[type="radio"]  { 
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border: 2px solid ${({ theme }) => theme.colors.$5};
    cursor: pointer;
    margin: 0;
  }

  input[type="radio"]:checked  { 
    position: relative;
    background: ${({ theme }) => theme.colors.$5};
    :after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      box-shadow: inset 0 0 0px 3px ${({ theme }) => theme.colors.$4};
    }
  }
`;

const InformationContentWithMargin = styled(InformationContent)`
  margin: 8px 0;
`;

const Divider = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.$4};
  margin: 8px 0;
`;

export default QuestionDetailCard;
