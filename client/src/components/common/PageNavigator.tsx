import styled from '@emotion/styled';
import React from 'react';

interface Props {
  totalPageCount: number
  currentPage: number
  onClickPage: (page: number) => void
}

const PageNavigator: React.FC<Props> = ({ totalPageCount, currentPage, onClickPage }) => {
  const pages = Array(totalPageCount).fill(0).map((_, i) => i + 1);
  const FIRST_PAGE = 1;
  const LAST_PAGE = totalPageCount;

  const handleClickPrevPage = () => {
    const destination = Math.max(currentPage - 1, FIRST_PAGE);
    onClickPage(destination);
  };

  const handleClickNextPage = () => {
    const destination = Math.min(currentPage + 1, LAST_PAGE);
    onClickPage(destination);
  };

  return (
    <PaginationerWrapper>
      <Page onClick={handleClickPrevPage}>{'<'}</Page>
      <EmptySpace size={16} />
      {pages.map((page, index) => (
        <>
          {index > 0 && <EmptySpace size={6} />}
          <Page target={currentPage === page} onClick={() => onClickPage(page)}>{page}</Page>
        </>
      ))}
      <EmptySpace size={16} />
      <Page onClick={handleClickNextPage}>{'>'}</Page>
    </PaginationerWrapper>
  );
};

const PaginationerWrapper = styled.div`
  display: flex;
`;
const Page = styled.a<{ target?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 36px;
  background: ${({ target }) => (target ? '#757575' : '#C4C4C4')} ;
  font-size: 24px;
  line-height: 33px;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
const EmptySpace = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export default PageNavigator;
