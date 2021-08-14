import React from 'react';

import {
  useRelayEnvironment,
} from 'react-relay/hooks';

import commitRemoveBookmarkMutation from '../../graphql/mutations/RemoveBookmark';
import commitAddBookmarkMutation from '../../graphql/mutations/AddBookmark';

interface Props {
  bookmark: any,
  questionId: string,
}

const BookmarkButton: React.FC<Props> = ({ bookmark, questionId }) => {
  const enviroment = useRelayEnvironment();

  const handleClickCancelBookmark = (bookmarkId: number) => () => {
    commitRemoveBookmarkMutation(enviroment, bookmarkId);
  };

  const handleClickAddBookmark = (id: number) => () => {
    const userId = 4; // TODO : 나중에 회원별 북마크 데이터 가져오는 걸로 수정해야 됨

    commitAddBookmarkMutation(enviroment, id, userId);
  };

  return (
    <>
      {bookmark
        ? <button type="button" onClick={handleClickCancelBookmark(Number(bookmark?.id))}>북마크취소</button>
        : <button type="button" onClick={handleClickAddBookmark(Number(questionId))}>북마크</button>}

    </>
  );
};

export default BookmarkButton;
