import React, { useEffect, Suspense } from 'react';

import {
  graphql,
  useQueryLoader,
  usePreloadedQuery,
  PreloadedQuery,
  useRelayEnvironment,
} from 'react-relay/hooks';

import { BookmarksPageQueryType } from '../__generated__/BookmarksPageQuery.graphql';

import commitRemoveBookmarkMutation from '../graphql/mutations/RemoveBookmark';

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

  const enviroment = useRelayEnvironment();

  const handleClickCancelBookmark = (bookmarkId: number) => () => {
    commitRemoveBookmarkMutation(enviroment, Number(bookmarkId));
  };

  return (
    <ul>
      {bookmarks
        .filter((bookmark) => bookmark)
        .map((bookmark) => (
          <li key={bookmark.id}>
            <p>{`Q) ${bookmark.question?.content}`}</p>
            <button type="button" onClick={handleClickCancelBookmark(Number(bookmark.id))}>북마크</button>
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
