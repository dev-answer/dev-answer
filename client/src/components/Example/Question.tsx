import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { Question_question } from '__generated__/Question_question.graphql';

interface Props {
  question: Question_question
}

const Question: React.FC<Props> = ({ question }) => (
  <section>
    <h2>
      문제 #
      {question.id}
    </h2>
    <p>
      제목:
      {question.title}
    </p>
    <p>
      내용:
      {question.content}
    </p>
  </section>
);

export default createFragmentContainer(Question, {
  question: graphql`
    fragment Question_question on Question{
      id
      title
      content
    }
  `,
});
