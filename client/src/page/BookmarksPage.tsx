import React, { useEffect, Suspense } from 'react';

import {
  useQueryLoader,
} from 'react-relay/hooks';

import styled from '@emotion/styled';

import { BookmarksPageQueryType } from '../__generated__/BookmarksPageQuery.graphql';

import Header from '../components/common/Header';

import CardViewIcon from '../components/Icon/CardViewIcon';
import FilterIcon from '../components/Icon/FilterIcon';
import ButtonWithIcon from '../components/common/ButtonWithIcon';

import Bookmarks, { bookmarksQuery } from '../components/Bookmark/Bookmarks';

import PageNavigator from '../components/common/PageNavigator';

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
      <Header logoColor="#626DAD" backgroundColor="transparent" />
      <BookmarkPageArea>
        <HeaderArea>
          <TitleArea>
            <h2>Javascript</h2>
            <span>_level 1</span>
          </TitleArea>
          <ButtonsArea>
            <CardViewIcon size={32} color="#C5C9E1" />
            <ButtonWithIcon
              width={124}
              height={48}
              text="최신 풀이 순"
              Icon={() => <FilterIcon size={16} color="#626DAD" />}
            />
          </ButtonsArea>

        </HeaderArea>

        <Bookmarks bookmarksQueryRef={bookmarksQueryRef} />

        <PageNavigator
          selectedFontColor="#FFFFFF"
          unselectedFontColor="#230640"
          selectedColor="#626DAD"
          unselectedColor="#C5C9E1"
          totalPageCount={5}
          currentPage={2}
          onClickPage={() => { console.log('페이지 클릭'); }}
        />
      </BookmarkPageArea>

    </Suspense>
  );
};

const BookmarkPageArea = styled.div`
  margin: 52px 248px 0;

  > div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 56px 0;
  }
`;

const HeaderArea = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: row;
  }
`;

const TitleArea = styled.div`

  & h2 {
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
  }

  & span {
    position: relative;
    top: 26px;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;

  }

`;

const ButtonsArea = styled.div`

  align-items: center;
  justify-content: center;

  & button {
    margin-left: 16px;
  }
`;

export default BookmarksPage;
