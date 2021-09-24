import React from 'react';
import styled from '@emotion/styled';

import { IconProps } from 'types/icon';

const CardViewIcon: React.FC<IconProps> = ({ size, color }) => (
  <Area size={size} color={color}>
    <div />
    <div />
    <div />
    <div />
  </Area>
);

const Area = styled.div<{ size: number, color: string }>`
  width: ${({ size }) => (`${size}px`)};
  height: ${({ size }) => (`${size}px`)};

  display: grid;
  gap: 4px;
  justify-items: stretch;
  grid-template-columns: 1fr 1fr;


  & div {
    background: ${({ color }) => color};
    border-radius: 2px;
  }
`;

export default CardViewIcon;
