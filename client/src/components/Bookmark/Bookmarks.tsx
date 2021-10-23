import React from 'react';

import {
  usePreloadedQuery,
  graphql,
  PreloadedQuery,
} from 'react-relay/hooks';

import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { BookmarksPageQuery } from '../../__generated__/BookmarksPageQuery.graphql';

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
  bookmarksQueryRef: PreloadedQuery<BookmarksPageQuery>,
};

const Bookmarks = ({ bookmarksQueryRef }: Props) => {
  const theme = useTheme();

  const data = usePreloadedQuery(bookmarksQuery, bookmarksQueryRef);

  const { bookmarks } = data;

  if (bookmarks === null) {
    return null;
  }

  return (
    <ul>
      {bookmarks
        .filter(Boolean)
        .map((bookmark) => {
          if (!bookmark || !bookmark.question) {
            return null;
          }

          return (
            <BookmarkItem key={bookmark.id}>
              <TopArea>
                <QIcon width={48} height={32} color={theme.colors.$5} />
                <span>{bookmark.question.content}</span>
                <BookmarkButton
                  size={48}
                  color={bookmark ? theme.colors.$5 : theme.colors.$1}
                  bookmark={bookmark}
                  questionId={bookmark.question.id}
                />
              </TopArea>
              <BottomArea>
                <span>
                  #최신 #N사 기출
                </span>
                <div>
                  <VoteIcon
                    size={40}
                    color={theme.colors.$5}
                    count={5}
                    countColor={theme.colors.$3}
                  />
                  <CommentIcon
                    size={40}
                    color={theme.colors.$5}
                    count={3}
                    countColor="#070707"
                  />
                </div>
              </BottomArea>
            </BookmarkItem>
          );
        })}
    </ul>
  );
};

const BookmarkItem = styled.li`

  display: flex;
  flex-direction: column;

  padding: 32px 64px;
  margin-bottom: 8px;

  height: 176px;

  background: ${({ theme }) => theme.colors.$4};
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

    color: ${({ theme }) => theme.colors.$t4};
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
