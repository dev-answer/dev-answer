import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { graphql, useFragment } from 'react-relay';

import { QuestionDetailCard_question$key } from '../../__generated__/QuestionDetailCard_question.graphql';

import QIcon from '../../components/Icon/QIcon';
import BookmarkIcon from '../../components/Icon/BookmarkIcon';

const questionDetailCardFragment = graphql`
  fragment QuestionDetailCard_question on Question {
    id
    content
    author {
      name
      gitHubURL
      profileImageURL
      id
    }
  }
`;

interface Props {
  questionRef: QuestionDetailCard_question$key
}

const QuestionDetailCard: React.FC<Props> = ({ questionRef }) => {
  const theme = useTheme();

  const { content, author } = useFragment<QuestionDetailCard_question$key>(
    questionDetailCardFragment, questionRef,
  );

  // 북마크쪽 서버 로직 완료되면 북마크도 퀘스쳔 데이터에 어그리게이트해서 내려주고, 이를 이용해서 조건부 렌더링 실행
  const isBookmarked = Math.random() > 0.5;

  return (
    <CardArea>
      <TopArea>
        <BookmarkButton>
          <BookmarkIcon size={84} color={isBookmarked ? theme.colors.$5 : theme.colors.$1} />
        </BookmarkButton>
        <QIcon size={72} color={theme.colors.$4} />

        <Question>{content}</Question>
      </TopArea>

      <BottomArea>
        <AuthorArea>
          <AuthorImage src={author.profileImageURL} alt={`${author.name}의 GitHub 프로필 이미지`} />
          <AuthorNickname href={author.gitHubURL}>{author.name}</AuthorNickname>
        </AuthorArea>

        <Divider />

        <InformationArea>
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
              <input type="radio" name="question_detail_vote" id="easy" />
            </VoteRadioLabel>
            <VoteRadioLabel htmlFor="normal">
              😍좋아요
              <input type="radio" name="question_detail_vote" id="normal" />
            </VoteRadioLabel>
            <VoteRadioLabel htmlFor="hard">
              😫어려워요
              <input type="radio" name="question_detail_vote" id="hard" />
            </VoteRadioLabel>
          </Information>
        </InformationArea>

        <Divider />

        <AdditionalQuestionTitle>연관질문</AdditionalQuestionTitle>
        <Divider />
        <AdditionalQuestionContent>프론트엔드 개발자가 되기로 결심한 이유는?</AdditionalQuestionContent>
        <AdditionalQuestionContent>마음이 맞지 않는 동료와 의견 충돌 경험?</AdditionalQuestionContent>
        <AdditionalQuestionContent>프로젝트를 진행하며 겪은 트러블 슈팅?</AdditionalQuestionContent>
      </BottomArea>
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

const TopArea = styled.div``;

const BottomArea = styled.div``;

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

const InformationArea = styled.div`
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
  justify-content: space-between;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  background: ${({ theme }) => theme.colors.$4};
  width: 100%;
  margin: 8px 0;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.$t4};

  :last-of-type {
    margin-bottom: 0;
  }
`;

const AdditionalQuestionTitle = styled(InformationTitle)``;

const AdditionalQuestionContent = styled(InformationContent)`
  margin: 8px 0;
`;

const Divider = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.$4};
  margin: 8px 0;
`;

export default QuestionDetailCard;
