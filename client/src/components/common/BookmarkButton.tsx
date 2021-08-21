import React from 'react';

import {
  graphql,
  useMutation,
  useRelayEnvironment,
} from 'react-relay/hooks';

import { RecordSourceSelectorProxy } from 'relay-runtime';

import commitRemoveBookmarkMutation from '../../graphql/mutations/RemoveBookmark';
import { BookmarkButtonMutation } from '../../__generated__/BookmarkButtonMutation.graphql';
import BookmarkIcon from '../Icon/BookmarkIcon';

interface Props {
  bookmark: any,
  questionId: string,
}

const AddBookmarkMutation = graphql`
  mutation BookmarkButtonMutation($userId: Int, $questionId: Int) {
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

const BookmarkButton: React.FC<Props> = ({ bookmark, questionId }) => {
  const enviroment = useRelayEnvironment();
  const [commitAddBookmark] = useMutation<BookmarkButtonMutation>(AddBookmarkMutation);

  const handleClickCancelBookmark = (bookmarkId: number) => () => {
    commitRemoveBookmarkMutation(enviroment, bookmarkId);
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
      <BookmarkIcon size={20} color={bookmark ? 'yellow' : 'gray'} />
    </button>
  );
};

export default BookmarkButton;
