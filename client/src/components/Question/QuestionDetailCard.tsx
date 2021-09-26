import React from 'react';
import { graphql, useFragment } from 'react-relay';
import { QuestionDetailCard_question$key } from '../../__generated__/QuestionDetailCard_question.graphql';

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
  const { content, author } = useFragment<QuestionDetailCard_question$key>(
    questionDetailCardFragment, questionRef,
  );

  return (
    <div>
      <div>{content}</div>
      <div>
        <img src={author.profileImageURL} alt={`${author.name}의 GitHub 프로필 이미지`} />
        <a href={author.gitHubURL}>{author.name}</a>
      </div>
    </div>
  );
};

export default QuestionDetailCard;
