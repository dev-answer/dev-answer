import React, {
  Fragment, ReactElement, useRef, useState,
} from 'react';
import styled from '@emotion/styled';

import useGetBoundingClientRect from '../../hooks/useGetBoundingClientRect';

interface Sheet {
  title: string | ReactElement
  onClick: () => void
}

interface Props {
  isOpen: boolean
  sheets: Sheet[]
}

const DropDown: React.FC<Props> = ({ isOpen, sheets }) => {
  const [mount, setMount] = useState(false);
  const [height, setHeight] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useGetBoundingClientRect(dropdownRef, (rect) => {
    setMount(true);
    setHeight(rect.height);
  });

  return (
    <DropDownArea ref={dropdownRef} mount={mount} isOpen={isOpen} heightValue={height}>
      {sheets.map(({ title, onClick }, index) => (
        <Fragment key={index.toString()}>
          <Item type="button" onClick={onClick}>
            {title}
          </Item>
          <Divider />
        </Fragment>
      ))}
    </DropDownArea>
  );
};

const DropDownArea = styled.div<{ mount: boolean; isOpen: boolean; heightValue: number }>`
  position: absolute;
  left: 0;
  top: 100%;
  transition: 200ms height, 200ms opacity;
  overflow: hidden;

  ${({ mount, isOpen, heightValue }) => {
    if (mount) {
      return isOpen
        ? `
          height: ${heightValue}px;
          opacity: 1;
        `
        : `
          height: 0;
          opacity: 0;
        `;
    }
    return '';
  }}
`;
const Item = styled.button`
  display: block;
  width: max-content;
  padding: 8px;
`;
const Divider = styled.hr`
  width: 100%;
  margin: 0;
`;

export default DropDown;
