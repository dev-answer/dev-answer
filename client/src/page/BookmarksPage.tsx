import React, { useEffect, Suspense } from 'react';

import {
  graphql,
  useQueryLoader,
  usePreloadedQuery,
  PreloadedQuery,
} from 'react-relay/hooks';

import { BookmarksPageQueryType } from '../__generated__/BookmarksPageQuery.graphql';

import BookmarkButton from '../components/common/BookmarkButton';

const bookmarksQuery = graphql`
  query BookmarksPageQuery($userId: Int!) {
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
  bookmarksQueryRef: PreloadedQuery<BookmarksPageQueryType>,
};

const Bookmarks = ({ bookmarksQueryRef }: Props) => {
  const data = usePreloadedQuery(bookmarksQuery, bookmarksQueryRef);

  const { bookmarks } = data;

  return (
    <ul>
      {bookmarks
        .filter((bookmark) => bookmark)
        .map((bookmark) => (
          <li key={bookmark.id}>
            <p>{`Q) ${bookmark.question?.content}`}</p>
            <BookmarkButton
              bookmark={bookmark}
              questionId={bookmark?.question?.id}
            />
          </li>
        ))}
    </ul>
  );
};

const BookmarksPage: React.FC = () => {
  const [
    bookmarksQueryRef, loadQuery, disposeQuery,
  ] = useQueryLoader<BookmarksPageQueryType>(bookmarksQuery);
  useEffect(() => {
    loadQuery({
      userId: 4, // TODO : 나중에 회원별 북마크 데이터 가져오는 걸로 수정해야 됨
    });
    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery]);

  if (bookmarksQueryRef === null) return null;

  return (
    <Suspense fallback={<p>bookmarkloading</p>}>
      <Bookmarks bookmarksQueryRef={bookmarksQueryRef} />
    </Suspense>
  );
};

export default BookmarksPage;
