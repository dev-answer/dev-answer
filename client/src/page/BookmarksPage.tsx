import React, { useEffect, Suspense } from 'react';

import {
  graphql, useQueryLoader, usePreloadedQuery, PreloadedQuery,
} from 'react-relay/hooks';

import { BookmarksPageQueryType } from '../__generated__/BookmarksPageQuery.graphql';

const bookmarksQuery = graphql`
  query BookmarksPageQuery($userId: Int!) {
    bookmarks(userId: $userId) {
      id
      question {
        content
      }
    }
  }
`;

type Props = {
  bookmarksQueryRef: PreloadedQuery<BookmarksPageQueryType>,
};

function Bookmarks({ bookmarksQueryRef }: Props) {
  const data = usePreloadedQuery(bookmarksQuery, bookmarksQueryRef);

  const { bookmarks } = data;

  return (
    <ul>
      {bookmarks.map((bookmark) => (
        <li key={bookmark.id}>
          <p>{`Q) ${bookmark.question.content}`}</p>
        </li>
      ))}
    </ul>
  );
}

const BookmarksPage: React.FC = () => {
  const [bookmarksQueryRef, loadBookmarksPage] = useQueryLoader<BookmarksPageQueryType>(bookmarksQuery);

  useEffect(() => {
    loadBookmarksPage({
      userId: 4,
    });
  }, []);

  if (bookmarksQueryRef === null) return null;

  return (
    <Suspense fallback={<p>bookmarkloading</p>}>
      <Bookmarks bookmarksQueryRef={bookmarksQueryRef} />
    </Suspense>
  );
};

export default BookmarksPage;
