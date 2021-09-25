import React from 'react';

import {
  usePreloadedQuery,
  graphql,
  PreloadedQuery,
} from 'react-relay/hooks';

import styled from '@emotion/styled';

import { BookmarksPageQueryType } from '../../__generated__/BookmarksPageQuery.graphql';

import QIcon from '../Icon/QIcon';
import VoteIcon from '../Icon/VoteIcon';
import CommentIcon from '../Icon/CommentIcon';

import BookmarkButton from '../common/BookmarkButton';

export const bookmarksQuery = graphql`
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
        .map((bookmark, index) => (
          <BookmarkItem key={bookmark.id}>
            <TopArea>
              <QIcon width={48} height={32} color="#8992C1" />
              <span>{bookmark.question?.content}</span>
              <BookmarkButton
                size={48}
                color={bookmark ? '#8992C1' : '#F6F6FA'}
                bookmark={bookmark}
                questionId={bookmark?.question?.id}
              />
            </TopArea>
            <BottomArea>
              <span>
                #최신 #N사 기출
              </span>
              <div>
                <VoteIcon size={40} color="#8992C1" count={5} countColor="#ECEDF5" />
                <CommentIcon size={40} color="#8992C1" count={3} countColor="#ECEDF5" />
              </div>
            </BottomArea>
          </BookmarkItem>
        ))}
    </ul>
  );
};

const BookmarkItem = styled.li`

  display: flex;
  flex-direction: column;

  padding: 32px 64px;
  margin-bottom: 8px;

  height: 176px;

  background: #C5C9E1;
  border-radius: 15px;

`;

const TopArea = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: flex-start;

  & span {
    margin: 0 16px;

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    color: #230640;
  }

`;

const BottomArea = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin-top: 8px;

  > span {
    margin-top: 18px;

  }

  & div {
    display: flex;
    flex-direction: row;

    > div {
      margin-right: 8px;
    }

  }


`;

export default Bookmarks;
