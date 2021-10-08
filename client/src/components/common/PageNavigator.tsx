import styled from '@emotion/styled';
import React, { Fragment } from 'react';

interface Props {
  selectedFontColor?: string
  unselectedFontColor?: string
  unselectedColor?: string
  selectedColor?: string
  totalPageCount: number
  currentPage: number
  onClickPage: (pageNumber: number) => void
}

const PageNavigator: React.FC<Props> = ({
  selectedFontColor = 'white',
  unselectedFontColor = 'black',
  unselectedColor = '#757575',
  selectedColor = '#C4C4C4',
  totalPageCount,
  currentPage,
  onClickPage,
}) => {
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
      <Page
        unselectedFontColor={unselectedFontColor}
        selectedFontColor={selectedFontColor}
        unselectedColor={unselectedColor}
        selectedColor={selectedColor}
        onClick={handleClickPrevPage}
      >
        {'<'}

      </Page>
      <EmptySpace size={16} />
      {pages.map((page, index) => (
        <Fragment key={page}>
          {index > 0 && <EmptySpace size={6} />}
          <Page
            unselectedFontColor={unselectedFontColor}
            selectedFontColor={selectedFontColor}
            unselectedColor={unselectedColor}
            selectedColor={selectedColor}
            selected={currentPage === page}
            onClick={() => onClickPage(page)}
          >
            {page}

          </Page>
        </Fragment>
      ))}
      <EmptySpace size={16} />
      <Page
        unselectedFontColor={unselectedFontColor}
        selectedFontColor={selectedFontColor}
        unselectedColor={unselectedColor}
        selectedColor={selectedColor}
        onClick={handleClickNextPage}
      >
        {'>'}

      </Page>
    </PaginationerWrapper>
  );
};

const PaginationerWrapper = styled.div`
  display: flex;
`;
const Page = styled.a<{ unselectedColor: string, selectedColor: string, unselectedFontColor: string, selectedFontColor: string, selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 36px;
  background: ${({ selected, selectedColor, unselectedColor }) => (selected ? selectedColor : unselectedColor)} ;
  font-size: 24px;
  line-height: 33px;
  border-radius: 3px;
  color:  ${({ selected, selectedFontColor, unselectedFontColor }) => (selected ? selectedFontColor : unselectedFontColor)};

  &:hover {
    opacity: 0.7;
  }
`;
const EmptySpace = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export default PageNavigator;
