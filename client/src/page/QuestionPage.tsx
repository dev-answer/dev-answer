import React, { useState, useRef } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

import { QuestionPageQuery } from '__generated__/QuestionPageQuery.graphql';

import styled from '@emotion/styled';
import { groupArray, makeGroupElementOneself } from '../utils/array';
import withSuspense from '../hocs/withSuspense';
import QuestionCard from '../components/Question/QuestionCard';

const COULMN_LINE_COUNT = 2;

const questionPageQuery = graphql`
  query QuestionPageQuery {
    allQuestions {
      id
      ...QuestionCard_question
    }
  }
`;

const QuestionPage: React.FC = () => {
  const questionsRef = useLazyLoadQuery<QuestionPageQuery>(questionPageQuery, {});
  const [selectedQuestionId, setSelectedQuestionId] = useState<null | string>(null);
  const baseRef = useRef<HTMLDivElement>(null);

  const questionsGroupedByColumnLineCount = groupArray(
    questionsRef.allQuestions,
    COULMN_LINE_COUNT,
  );

  const { groupedArray, oneselfIndex } = makeGroupElementOneself(
    questionsGroupedByColumnLineCount,
    (e) => e.id === selectedQuestionId,
  );

  const handleClickSmallQuestion = (id: string) => () => {
    setSelectedQuestionId(id);
  };

  return (
    <Base ref={baseRef}>
      {groupedArray.map((groupedElement, index) => (
        <div key={`group-${groupedElement[0].id}`}>
          {(() => {
            if (index === oneselfIndex) {
              return (
                <QuestionCard
                  questionRef={groupedElement[0]}
                  size="middle"
                  onClick={handleClickSmallQuestion(groupedElement[0].id)}
                />
              );
            }

            return (
              <>
                {groupedElement.map((questionRef) => (
                  <QuestionCard
                    key={questionRef.id}
                    size="small"
                    questionRef={questionRef}
                    onClick={handleClickSmallQuestion(questionRef.id)}
                  />
                ))}
              </>
            );
          })()}
        </div>
      ))}
    </Base>
  );
};

const Base = styled.div`
  display: flex;
`;

export default withSuspense(QuestionPage, () => <div>로딩중...</div>);
