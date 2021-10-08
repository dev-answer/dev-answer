import React from 'react';

import {
  graphql,
  useMutation,
} from 'react-relay/hooks';

import { RecordSourceSelectorProxy } from 'relay-runtime';

import { BookmarkButtonAddMutation } from '../../__generated__/BookmarkButtonAddMutation.graphql';
import { BookmarkButtonRemoveMutation } from '../../__generated__/BookmarkButtonRemoveMutation.graphql';

import BookmarkIcon from '../Icon/BookmarkIcon';

interface Props {
  size: number,
  color: string,
  bookmark: any,
  questionId: string,
}

const AddBookmarkMutation = graphql`
  mutation BookmarkButtonAddMutation($userId: Int, $questionId: Int) {
    addBookmark(userId: $userId, questionId: $questionId) {
      user {
        id
      }
      question {
        id
      }
    }
  }
`;

const removeBookmarkMutation = graphql`
  mutation BookmarkButtonRemoveMutation($bookmarkId: Int!) {
    removeBookmark(bookmarkId: $bookmarkId) {
      id @deleteRecord
    }
  }
`;

const BookmarkButton: React.FC<Props> = ({
  size, color, bookmark, questionId,
}) => {
  const [commitAddBookmark] = useMutation<BookmarkButtonAddMutation>(AddBookmarkMutation);
  const [commitRemoveBookmark] = useMutation<BookmarkButtonRemoveMutation>(removeBookmarkMutation);

  const handleClickCancelBookmark = (bookmarkId: number) => () => {
    commitRemoveBookmark({
      variables: {
        bookmarkId,
      },
      optimisticResponse: {
        removeBookmark: {
          id: bookmarkId.toString(),
        },
      },
    });
  };

  const handleClickAddBookmark = (id: number) => () => {
    const userId = 4; // TODO : 나중에 회원별 북마크 데이터 가져오는 걸로 수정해야 됨

    commitAddBookmark({
      variables: {
        questionId: id,
        userId,
      },
      updater: (store: RecordSourceSelectorProxy) => {
        console.log('updater');

        const userBookmarksRecords = `bookmarks(userId:${userId})`;
        const rootStore = store.get('client:root');
        const bookmarks = rootStore?.getLinkedRecords(userBookmarksRecords);

        const newBookmarks = store.getRootField('addBookmark');

        rootStore?.setLinkedRecords([...bookmarks, newBookmarks], userBookmarksRecords);
      },
    });
  };

  return (
    <button type="button" onClick={bookmark ? handleClickCancelBookmark(Number(bookmark?.id)) : handleClickAddBookmark(Number(questionId))}>
      <BookmarkIcon size={size} color={color} />
    </button>
  );
};

export default BookmarkButton;
