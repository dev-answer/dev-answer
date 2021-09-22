import React, { useEffect, Suspense } from 'react';

import {
  graphql,
  useQueryLoader,
  usePreloadedQuery,
  PreloadedQuery,
} from 'react-relay/hooks';

import { QuestionsPageQuery } from '__generated__/QuestionsPageQuery.graphql';

import BookmarkButton from '../components/common/BookmarkButton';

const questionsQuery = graphql`
  query QuestionsPageQuery($userId: Int!) {
    allQuestions {
      id
      content
    }
    bookmarks(userId: $userId) {
      id
      question {
        id
        content
      }
    }
  }
`;

type Props = {
  questionsQueryRef: PreloadedQuery<QuestionsPageQuery>,
};

const Questions = ({ questionsQueryRef }: Props) => {
  const data = usePreloadedQuery(questionsQuery, questionsQueryRef);

  const { allQuestions, bookmarks } = data;

  const questions = allQuestions?.map((question) => ({
    ...question,
    bookmark: bookmarks?.find((bookmark) => bookmark?.question?.id === question?.id),
  }));

  return (
    <ul>
      {questions?.filter((question) => question)
        .map((question) => (
          <li key={question.id}>
            <p>{`Q) ${question?.content}`}</p>
            <BookmarkButton
              bookmark={question?.bookmark}
              questionId={question.id}
            />
          </li>
        ))}
    </ul>
  );
};

const QuestionsPage: React.FC = () => {
  const [
    questionsQueryRef, loadQuery, disposeQuery,
  ] = useQueryLoader<QuestionsPageQuery>(questionsQuery);

  useEffect(() => {
    loadQuery({
      userId: 4, // TODO : 나중에 회원별 북마크 데이터 가져오는 걸로 수정해야 됨
    });
    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery]);

  if (questionsQueryRef === null) return null;

  return (
    <Suspense fallback={<p>questionloading</p>}>
      <Questions questionsQueryRef={questionsQueryRef} />
    </Suspense>
  );
};

export default QuestionsPage;
